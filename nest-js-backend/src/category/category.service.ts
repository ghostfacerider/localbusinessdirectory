import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './schemas/category.schema';

@Injectable()
export class CategoryService {
  constructor(@InjectModel('Category') private readonly categoryModel: Model<Category>) {}

  async insertCategories(categories: any[]): Promise<any> {
    try {
      // Insert categories into the database
      const createdCategories = await this.categoryModel.insertMany(categories);
      return createdCategories;
    } catch (error) {
      throw new Error('Error inserting categories: ' + error.message);
    }
  }
}
