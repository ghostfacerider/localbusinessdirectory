import { Controller, Get, UseGuards } from '@nestjs/common';
import { BusinessReviewsService } from './business-reviews.service';
import { AuthMiddleware } from 'src/auth.middleware';

@Controller('businessReviews')
@UseGuards(AuthMiddleware) // Apply middleware to the login route
export class BusinessReviewsController {
  constructor(
    private readonly businessReviewsService: BusinessReviewsService,
  ) {}

  @Get()
  async fetchData() {
    return this.businessReviewsService.fetchData();
  }
}
