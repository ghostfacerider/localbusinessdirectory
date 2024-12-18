import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { BusinessDetail } from '../business-details/schema/business-detail.schema';
import { SearchService } from './search.service';
import { AuthMiddleware } from 'src/auth.middleware';

@Controller()
export class SearchController {
  constructor(private readonly businessDetailsService: SearchService) {}

  @Get('search')
  @UseGuards(AuthMiddleware) // Apply middleware to the login route
  async search(@Query('find') find: string, @Query('where') where: string) {
    return this.businessDetailsService.fetchSearchData(find, where);
  }

  @Get('searchinarea')
  @UseGuards(AuthMiddleware) // Apply middleware to the login route
  async searchInArea(
    @Query('find') find: string,
    @Query('latitude') latitude: string,
    @Query('longitude') longitude: string,
  ) {
    return this.businessDetailsService.fetchSearchInAreaData(find, latitude, longitude);
  }
}
