// src/category/schemas/category.schema.ts
import { Schema, Document } from 'mongoose';

export interface Category extends Document {
  category: string;
  subcategories: Array<{
    name: string;
    subcategories: string[];
  }>;
}

export const CategorySchema = new Schema<Category>({
  category: { type: String, required: true },
  subcategories: [
    {
      name: { type: String, required: true },
      subcategories: [{ type: String, required: true }],
    },
  ],
});
