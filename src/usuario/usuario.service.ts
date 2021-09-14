import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Usuario, UsuarioDocument } from './schema/usuario.schema';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const email = createUsuarioDto.email;
    const existeEmail = await this.usuarioModel.findOne({ email }).exec();

    if (existeEmail) {
      throw new HttpException('El email ya existe', HttpStatus.BAD_REQUEST);
    }

    const newUsuario = new this.usuarioModel(createUsuarioDto);
    await newUsuario.save();

    return newUsuario;
  }

  findAll(): Promise<Usuario[]> {
    return this.usuarioModel.find().exec();
  }

  findOne(id: string) {
    return this.usuarioModel.findById(id).exec();
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioDB = await this.usuarioModel.findById(id).exec();

    if (!usuarioDB) {
      throw new HttpException(
        'No existe un usuario por ese ID',
        HttpStatus.NOT_FOUND,
      );
    }

    const { password, google, email, ...campos } = updateUsuarioDto;

    if (usuarioDB.email != email) {
      const existeEmail = await this.usuarioModel.findOne({ email }).exec();
      if (existeEmail) {
        throw new HttpException(
          'Ya existe un usuario con ese email',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    campos['email'] = email;
    const usuarioActualizado = await this.usuarioModel
      .findOneAndUpdate({ _id: id }, campos, { new: true })
      .exec();

    return usuarioActualizado;
  }

  async remove(id: string) {
    const usuarioDB = await this.usuarioModel.findById(id).exec();

    if (!usuarioDB) {
      throw new HttpException(
        'No existe un usuario por ese ID',
        HttpStatus.NOT_FOUND,
      );
    }

    await this.usuarioModel.findOneAndDelete({ _id: id });

    return 'Usuario eliminado con éxito';
  }
}
