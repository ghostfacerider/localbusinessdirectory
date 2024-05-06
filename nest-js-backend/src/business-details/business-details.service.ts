import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  BusinessDetail,
  BusinessDetailDocument,
} from './schema/business-detail.schema';
import axios from 'axios';

@Injectable()
export class BusinessDetailsService {
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
}
