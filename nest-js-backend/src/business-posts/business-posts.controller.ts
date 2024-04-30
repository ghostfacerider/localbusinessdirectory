import { Controller, Get, UseGuards } from '@nestjs/common';
import { BusinessPostsService } from './business-posts.service';
import { AuthMiddleware } from 'src/auth.middleware';

@Controller('businessPosts')
export class BusinessPostsController {
  constructor(private readonly businessPostsService: BusinessPostsService) {}

  @Get()
  @UseGuards(AuthMiddleware) // Apply middleware to the login route
  async fetchData() {
    return this.businessPostsService.fetchData();
  }
}
