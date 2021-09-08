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

// import { Schema, model } from 'mongoose';

// const UsuarioSchema = new Schema({
//   nombre: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   img: {
//     type: String,
//   },
//   role: {
//     type: String,
//     required: true,
//     default: 'USER_ROLE',
//   },
//   google: {
//     type: Boolean,
//     default: false,
//   },
// });

// UsuarioSchema.method('toJSON', function () {
//   const { __v, _id, password, ...object } = this.toObject();
//   object.uid = _id;
//   return object;
// });

// module.exports = model('Usuario', UsuarioSchema);
