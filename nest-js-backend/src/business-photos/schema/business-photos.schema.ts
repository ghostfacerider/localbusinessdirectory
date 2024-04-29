import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BusinessPhoto extends Document {
  @Prop()
  photo_id: string;

  @Prop()
  photo_url: string;

  @Prop()
  photo_url_large: string;

  @Prop()
  type: string;

  @Prop()
  photo_datetime_utc: Date;

  @Prop()
  photo_timestamp: number;
}

export const BusinessPhotoSchema = SchemaFactory.createForClass(BusinessPhoto);
