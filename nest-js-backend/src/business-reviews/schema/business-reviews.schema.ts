// src/business-reviews/schemas/business-reviews.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BusinessReviewDocument = BusinessReview & Document;

@Schema()
export class BusinessReview {
  @Prop({ required: true })
  review_id: string;

  @Prop({ required: true })
  review_text: string;

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  review_datetime_utc: Date;

  @Prop({ required: true })
  review_timestamp: Date;

  @Prop({ required: true })
  review_link: string;

  @Prop({ required: true })
  review_photos: string[];

  @Prop({ required: true })
  like_count: number;

  @Prop({ required: true })
  author_name: string;

  @Prop({ required: true })
  author_photo_url: string;
}

export const BusinessReviewSchema =
  SchemaFactory.createForClass(BusinessReview);
