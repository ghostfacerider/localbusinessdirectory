import { Controller, Get, Post, Body, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserSchema } from './schema/user.schema';
import { Login, LoginSchema } from './schema/login.schema';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Response } from 'express';
import { AuthMiddleware } from 'src/auth.middleware';

class CreateUserDto {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

class LoginUserDto {
  email: string;
  password: string;
}
@Controller('users')
@UseGuards(AuthMiddleware) // Apply middleware to the login route
export class UsersController {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Login.name) private readonly loginModel: Model<Login>,
  ) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const { firstname, lastname, email, password } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    const token = jwt.sign({ data: newUser }, process.env.JWT_SECRET_KEY);
    res.header('x-auth-token', token);
    res
      .status(HttpStatus.OK)
      .json({ serverMessage: 'Registration successful', data: newUser, token });
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
    const { email, password } = loginUserDto;
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) {
      return res.status(HttpStatus.UNAUTHORIZED).send();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ data: user }, process.env.JWT_SECRET_KEY);
      res.header('x-auth-token', token);
      res
        .status(HttpStatus.OK)
        .send({ serverMessage: 'Login successful', data: user, token });
    } else {
      res.status(HttpStatus.UNAUTHORIZED).send();
    }
  }
}
