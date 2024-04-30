// src/business-photo-details/business-photo-details.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BusinessPhotoDetails, BusinessPhotoDetailsDocument } from './schema/business-photo-details.schema';
import axios from 'axios';

@Injectable()
export class BusinessPhotoDetailsService {
  constructor(
    @InjectModel(BusinessPhotoDetails.name) private readonly businessPhotoDetailsModel: Model<BusinessPhotoDetailsDocument>,
  ) {}

  async fetchData() {
    try {
      const options = {
        method: 'GET',
        url: 'https://local-business-data.p.rapidapi.com/photo-details',
        params: {
          business_id: '0x89c259b5a9bd152b:0x31453e62a3be9f76',
          photo_id: 'AF1QipMPYCqZ5Fe8a7Jc51KT9pWOS5c6tOKY_xvkCl23',
        },
        headers: {
          'X-RapidAPI-Key': process.env.RapidAPIKey,
          'X-RapidAPI-Host': process.env.RapidAPIHost,
        },
      };

      const response = await axios.request(options);
      const businessPhotoDetails = response.data.data;

      for (const photoDetail of businessPhotoDetails) {
        const createdDetail = new this.businessPhotoDetailsModel({
          photo_id: photoDetail.photo_id,
          caption: photoDetail.caption,
          owner_id: photoDetail.owner_id,
          owner_name: photoDetail.owner_name,
          owner_photo: photoDetail.owner_photo,
          owner_profile_link: photoDetail.owner_profile_link,
        });
        await createdDetail.save();
      }

      return businessPhotoDetails;
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error');
    }
  }
}
