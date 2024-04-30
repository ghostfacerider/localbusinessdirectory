// src/business-photo-details/business-photo-details.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BusinessPhotoDetailsDocument = BusinessPhotoDetails & Document;

@Schema()
export class BusinessPhotoDetails {
  @Prop({ required: true })
  photo_id: string;

  @Prop({ required: true })
  caption: string;

  @Prop({ required: true })
  owner_id: number;

  @Prop({ required: true })
  owner_name: string;

  @Prop({ required: true })
  owner_photo: string;

  @Prop({ required: true })
  owner_profile_link: string;
}

export const BusinessPhotoDetailsSchema = SchemaFactory.createForClass(BusinessPhotoDetails);
