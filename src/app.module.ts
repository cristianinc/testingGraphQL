import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModule } from './usuario/usuario.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://conexion con la base mongo',
    ),
    UsuarioModule,
    VideoModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
})
export class AppModule {}
