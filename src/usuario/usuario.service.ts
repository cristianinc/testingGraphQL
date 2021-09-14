import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
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

      const existeEmail = this.usuarioModel.findOne({ email });
      if (existeEmail) {
        .cat
      }
      const newUsuario = new this.usuarioModel(createUsuarioDto);
      await newUsuario.save();

      return newUsuario;

  }

  findAll(): Promise<Usuario[]> {
    return this.usuarioModel.find().exec();
    //return `This action returns all usuario`;
  }

  findOne(id: string) {
    return this.usuarioModel.findById(id).exec();
    //return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
