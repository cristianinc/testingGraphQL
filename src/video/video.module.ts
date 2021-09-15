import { Module } from '@nestjs/common';
import { VideoResolvers } from './video.resolvers';
import { VideoService } from './video.services';

@Module({ providers: [VideoService, VideoResolvers] })
export class VideoModule {}
