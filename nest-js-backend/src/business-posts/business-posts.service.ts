import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';
import {
  BusinessPost,
  BusinessPostsDocument,
} from './schema/business-posts.schema';

@Injectable()
export class BusinessPostsService {
  constructor(
    @InjectModel(BusinessPost.name)
    private readonly businessPostModel: Model<BusinessPostsDocument>,
  ) {}

  async fetchData(): Promise<any> {
    try {
      const options = {
        method: 'GET',
        url: 'https://local-business-data.p.rapidapi.com/business-posts',
        params: {
          business_id: '0x880fd393d427a591:0x8cba02d713a995ed',
          region: 'us',
          language: 'en',
        },
        headers: {
          'X-RapidAPI-Key': process.env.RapidAPIKey,
          'X-RapidAPI-Host': process.env.RapidAPIHost,
        },
      };

      const response = await axios.request(options);
      const businessPostsData = response.data.data.posts;

      for (const postData of businessPostsData) {
        const post = new this.businessPostModel({
          post_id: postData.post_id,
          post_link: postData.post_link,
          post_datetime_utc: postData.post_datetime_utc,
          post_timestamp: postData.post_timestamp,
          post_text: postData.post_text,
          post_links: postData.post_links,
          post_photos: postData.post_photos,
        });
        await post.save();
      }

      return businessPostsData;
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error');
    }
  }
}
