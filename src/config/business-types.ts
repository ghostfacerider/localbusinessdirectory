export const DaysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
] as const;

type DaysOfWeek = (typeof DaysOfWeek)[number];

export interface WorkingHours {
  [key: string]: string[] | undefined;
}

export interface BusinessPhoto {
  photo_id?: string;
  photo_url?: string;
  photo_url_large?: string;
  video_thumbnail_url?: string;
  latitude?: number;
  longitude?: number;
  type?: string;
  photo_datetime_utc?: Date;
  photo_timestamp?: number;
}

export interface EmailsAndContacts {
  emails?: string[];
  phone_numbers?: string[];
  facebook?: string;
  yelp?: string;
  snapchart?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  youtube?: string;
  pinterest?: string;
}

export interface Photo {
  photo_url: string;
}

export interface Business {
  business_id: string;
  name: string;
  city: string;
  state: string;
  type: string;
  business_status: string;
  website: string;
  photos_sample: Photo[];
}

export interface Credentials {
  email: string;
  password: string;
}

export interface Registration {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface Errors {
  firstname?: { message: string };
  lastname?: { message: string };
  email?: { message: string };
  password?: { message: string };
  serverMessage?: string;
}

export interface ErrorResponse {
  status: number;
  data: {
    errors?: { [key: string]: { message: string } };
    serverMessage?: string;
  };
}

export interface SearchParams {
  findQuery: string;
  whereQuery: string;
}

export interface Player {
  firstname: string;
  lastname: string;
  position: string;
}

export interface BusinessDetail {
  business_id?: string;
  google_id?: string;
  place_id?: string;
  google_mid?: string;
  phone_number?: string;
  name?: string;
  latitude?: string;
  longitude?: string;
  full_address?: string;
  review_count?: string;
  rating?: number;
  timezone?: string;
  working_hours?: WorkingHours;
  website?: string;
  verified?: string;
  place_link?: string;
  cid?: string;
  reviews_link?: string;
  owner_id?: string;
  owner_link?: string;
  owner_name?: string;
  booking_link?: string;
  reservation_link?: string;
  business_status?: string;
  type?: string;
  subtypes?: string[];
  photos_sample?: BusinessPhoto[];
  address?: string;
  district?: string;
  street_address?: string;
  city?: string;
  zipcode?: string;
  state?: string;
  country?: string;
  emails_and_contacts?: EmailsAndContacts;
}
