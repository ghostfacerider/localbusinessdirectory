import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessReviewsController } from './business-reviews.controller';
import { BusinessReviewsService } from './business-reviews.service';
import { BusinessReview, BusinessReviewSchema } from './schema/business-reviews.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BusinessReview.name, schema: BusinessReviewSchema }]),
  ],
  controllers: [BusinessReviewsController],
  providers: [BusinessReviewsService],
})
export class BusinessReviewsModule {}
