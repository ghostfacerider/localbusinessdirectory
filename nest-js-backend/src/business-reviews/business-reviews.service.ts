import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  BusinessReview,
  BusinessReviewDocument,
} from './schema/business-reviews.schema';
import axios from 'axios';

@Injectable()
export class BusinessReviewsService {
  constructor(
    @InjectModel(BusinessReview.name)
    private readonly businessReviewModel: Model<BusinessReviewDocument>,
  ) {}

  async fetchData(): Promise<any> {
    try {
      const options = {
        method: 'GET',
        url: 'https://local-business-data.p.rapidapi.com/business-reviews',
        params: {
          business_id: '0x89c259b5a9bd152b:0x31453e62a3be9f76',
          limit: '5',
          region: 'us',
          language: 'en',
        },
        headers: {
          'X-RapidAPI-Key': process.env.RapidAPIKey,
          'X-RapidAPI-Host': process.env.RapidAPIHost,
        },
      };

      const response = await axios.request(options);
      const businessReviews = response.data.data;

      for (const review of businessReviews) {
        const businessReview = new this.businessReviewModel({
          review_id: review.review_id,
          review_text: review.review_text,
          rating: review.rating,
          review_datetime_utc: review.review_datetime_utc,
          review_timestamp: review.review_timestamp,
          review_link: review.review_link,
          review_photos: review.review_photos,
          like_count: review.like_count,
          author_name: review.author_name,
          author_photo_url: review.author_photo_url,
        });
        await businessReview.save();
      }

      return businessReviews;
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error');
    }
  }
}
