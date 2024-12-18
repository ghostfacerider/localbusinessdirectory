import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  BusinessDetail,
  BusinessDetailSchema,
} from '../business-details/schema/business-detail.schema';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/localbusinessdirectory'),
    MongooseModule.forFeature([{ name: BusinessDetail.name, schema: BusinessDetailSchema }]),
  ],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
