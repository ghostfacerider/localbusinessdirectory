import { Controller, Get, UseGuards } from '@nestjs/common';
import { BusinessPhotosService } from './business-photos.service';
import { AuthMiddleware } from 'src/auth.middleware';

@Controller('businessPhotos')
export class BusinessPhotosController {
  constructor(private readonly businessPhotosService: BusinessPhotosService) {}

  @Get()
  @UseGuards(AuthMiddleware) // Apply middleware to the login route
  async fetchData(): Promise<any> {
    return this.businessPhotosService.fetchData();
  }
}
