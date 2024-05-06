import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessPostsController } from './business-posts.controller';
import { BusinessPostsService } from './business-posts.service';
import {
  BusinessPost,
  BusinessPostSchema,
} from './schema/business-posts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BusinessPost.name, schema: BusinessPostSchema },
    ]),
  ],
  controllers: [BusinessPostsController],
  providers: [BusinessPostsService],
})
export class BusinessPostsModule {}
