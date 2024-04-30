import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Login extends Document {
  @Prop({ required: true })
  password: string;

  @Prop({
    lowercase: true,
    trim: true,
    maxLength: 255,
    required: true,
    validate: {
      validator: (v: string) => {
        return /[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[a-z]{2,}$/.test(v);
      },
    },
  })
  email: string;
}

export const LoginSchema = SchemaFactory.createForClass(Login);
