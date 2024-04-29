// src/business-photo-details/business-photo-details.controller.ts

import { Controller, Get, UseGuards } from '@nestjs/common';
import { BusinessPhotoDetailsService } from './business-photo-details.service';
import { AuthMiddleware } from 'src/auth.middleware';

@Controller('businessPhotosDetails')
export class BusinessPhotoDetailsController {
  constructor(private readonly service: BusinessPhotoDetailsService) {}

  @Get()
  @UseGuards(AuthMiddleware) // Apply middleware to the login route
  fetchData() {
    return this.service.fetchData();
  }
}
