import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModule } from './usuario/usuario.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mean_user:zWaTCZss0Rhh3G94@cluster0.rlyjz.gcp.mongodb.net/hospitaldb?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    ),
    UsuarioModule,
    VideoModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
})
export class AppModule {}
