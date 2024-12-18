import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  BusinessDetail,
  BusinessDetailDocument,
} from '../business-details/schema/business-detail.schema';
import axios from 'axios';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(BusinessDetail.name)
    private businessDetailModel: Model<BusinessDetailDocument>,
  ) {}

  async findAll(): Promise<BusinessDetail[]> {
    return this.businessDetailModel.find().limit(12).exec();
  }

  async findOne(id: string): Promise<BusinessDetail | null> {
    return this.businessDetailModel.findById(id).exec();
  }

  async fetchSearchData(find: string, where: string) {
    try {
      const options = {
        method: 'GET',
        url: 'https://local-business-data.p.rapidapi.com/search',
        params: {
          query: `${find} , ${where}`,
          limit: '12',
          language: 'en',
          region: 'us',
        },
        headers: {
          'X-RapidAPI-Key': process.env.RapidAPIKey,
          'X-RapidAPI-Host': process.env.RapidAPIHost,
        },
      };

      const response = await axios.request(options);
      const businesses = response.data.data;
      for (const business of businesses) {
        await this.businessDetailModel.create(business);
      }

      return businesses;
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error');
    }
  }

  async fetchSearchInAreaData(find: string, latitude: string, longitude: string) {
    try {
      const options = {
        method: 'GET',
        url: 'https://local-business-data.p.rapidapi.com/search-in-area',
        params: {
          query: `${find}`,
          lat: `${latitude}`,
          lng: `${longitude}`,
          zoom: '13',
          limit: '10',
          language: 'en',
          region: 'us',
        },
        headers: {
          'X-RapidAPI-Key': process.env.RapidAPIKey,
          'X-RapidAPI-Host': process.env.RapidAPIHost,
        },
      };

      const response = await axios.request(options);
      const businesses = response.data.data;
      for (const business of businesses) {
        await this.businessDetailModel.create(business);
      }

      return businesses;
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error');
    }
  }
}
