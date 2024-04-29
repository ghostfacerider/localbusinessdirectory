import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { BusinessDetailsService } from './business-details.service';
import { BusinessDetail } from './schema/business-detail.schema';
import { AuthMiddleware } from 'src/auth.middleware';

@Controller('businessDetails')
export class BusinessDetailsController {
  constructor(
    private readonly businessDetailsService: BusinessDetailsService,
  ) {}

  @Get()
  @UseGuards(AuthMiddleware) // Apply middleware to the login route
  async findAll(): Promise<BusinessDetail[]> {
    return this.businessDetailsService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthMiddleware) // Apply middleware to the login route
  async findOne(@Param('id') id: string): Promise<BusinessDetail | null> {
    return this.businessDetailsService.findOne(id);
  }
}
