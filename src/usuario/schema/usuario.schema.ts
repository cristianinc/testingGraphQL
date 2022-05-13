import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  img: string;

  @Prop({ required: true, default: 'USER_ROLE' })
  role: string;

  @Prop({ default: false })
  google: boolean;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);

//Serialización-----
// UsuarioSchema.method('toJSON', function () {
//   const { __v, _id, password, ...object } = this.toObject();
//   object.uid = _id;
//   return object;
// });

// module.exports = model('Usuario', UsuarioSchema);
