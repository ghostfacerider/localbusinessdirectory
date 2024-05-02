import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BusinessPhoto } from './schema/business-photos.schema';

@Injectable()
export class BusinessPhotosService {
  constructor(
    @InjectModel(BusinessPhoto.name)
    private readonly businessPhotoModel: Model<BusinessPhoto>,
  ) {}

  async fetchData(): Promise<any> {
    const options = {
      method: 'GET',
      url: 'https://local-business-data.p.rapidapi.com/business-photos',
      params: {
        business_id: '0x89c259b5a9bd152b:0x31453e62a3be9f76',
        limit: '20',
        region: 'us',
      },
      headers: {
        'X-RapidAPI-Key': process.env.RapidAPIKey,
        'X-RapidAPI-Host': process.env.RapidAPIHost,
      },
    };

    try {
      const response = await axios.request(options);
      const businessPhotos = response.data.data;

      for (const photo of businessPhotos) {
        const newPhoto = new this.businessPhotoModel({
          photo_id: photo.photo_id,
          photo_url: photo.photo_url,
          photo_url_large: photo.photo_url_large,
          type: photo.type,
          photo_datetime_utc: photo.photo_datetime_utc,
          photo_timestamp: photo.photo_timestamp,
        });
        await newPhoto.save();
      }

      return businessPhotos;
    } catch (error) {
      throw new Error('Failed to fetch business photos');
    }
  }
}
