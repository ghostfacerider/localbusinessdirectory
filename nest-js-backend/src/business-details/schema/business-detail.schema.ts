import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BusinessDetailDocument = BusinessDetail & Document;

@Schema()
export class DayTime {
  @Prop([String])
  Monday: string[];

  @Prop([String])
  Tuesday: string[];

  @Prop([String])
  Wednesday: string[];

  @Prop([String])
  Thursday: string[];

  @Prop([String])
  Friday: string[];

  @Prop([String])
  Saturday: string[];

  @Prop([String])
  Sunday: string[];
}

@Schema()
export class EmailsAndContacts {
  @Prop([String])
  emails: string[];

  @Prop([String])
  phone_numbers: string[];

  @Prop()
  facebook?: string;

  @Prop()
  yelp?: string;

  @Prop()
  snapchat?: string;

  @Prop()
  twitter?: string;

  @Prop()
  linkedin?: string;

  @Prop()
  github?: string;

  @Prop()
  youtube?: string;

  @Prop()
  pinterest?: string;
}

@Schema()
export class PhotoSample {
  @Prop()
  photo_id?: string;

  @Prop()
  photo_url?: string;

  @Prop()
  photo_url_large?: string;

  @Prop()
  video_thumbnail_url?: string;

  @Prop()
  latitude?: number;

  @Prop()
  longitude?: number;

  @Prop()
  type?: string;

  @Prop()
  photo_datetime_utc?: Date;

  @Prop()
  photo_timestamp?: number;
}

@Schema()
export class BusinessDetail extends Document {
  @Prop()
  business_id: string;

  @Prop()
  google_id?: string;

  @Prop()
  place_id?: string;

  @Prop()
  google_mid?: string;

  @Prop()
  phone_number?: string;

  @Prop()
  name: string;

  @Prop()
  latitude?: string;

  @Prop()
  longitude?: string;

  @Prop()
  full_address?: string;

  @Prop()
  review_count?: string;

  @Prop()
  rating?: number;

  @Prop()
  timezone?: string;

  @Prop({ type: DayTime })
  working_hours?: DayTime;

  @Prop()
  website?: string;

  @Prop()
  verified?: string;

  @Prop()
  place_link?: string;

  @Prop()
  cid?: string;

  @Prop()
  reviews_link?: string;

  @Prop()
  owner_id?: string;

  @Prop()
  owner_link?: string;

  @Prop()
  owner_name?: string;

  @Prop()
  booking_link?: string;

  @Prop()
  reservation_link?: string;

  @Prop()
  business_status?: string;

  @Prop()
  type?: string;

  @Prop([String])
  subtypes?: string[];

  @Prop([PhotoSample])
  photos_sample?: PhotoSample[];

  @Prop()
  address?: string;

  @Prop()
  district?: string;

  @Prop()
  street_address?: string;

  @Prop()
  city?: string;

  @Prop()
  zipcode?: string;

  @Prop()
  state?: string;

  @Prop()
  country?: string;

  @Prop({ type: EmailsAndContacts })
  emails_and_contacts?: EmailsAndContacts;
}

export const BusinessDetailSchema =
  SchemaFactory.createForClass(BusinessDetail);
