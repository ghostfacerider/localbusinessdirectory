import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BusinessPostsDocument = BusinessPost & Document;

@Schema()
export class BusinessPost extends Document {
  @Prop({ required: true })
  post_id: string;

  @Prop({ required: true })
  post_link: string;

  @Prop({ required: true })
  post_datetime_utc: Date;

  @Prop({ required: true })
  post_timestamp: number;

  @Prop({ required: true })
  post_text: string;

  @Prop([{ url: String, caption: String }])
  post_links: { url: string, caption: string }[];

  @Prop([String])
  post_photos: string[];
}

export const BusinessPostSchema = SchemaFactory.createForClass(BusinessPost);
