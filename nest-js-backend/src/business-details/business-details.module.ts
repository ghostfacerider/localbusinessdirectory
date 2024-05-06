import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessDetailsController } from './business-details.controller';
import { BusinessDetailsService } from './business-details.service';
import {
  BusinessDetail,
  BusinessDetailSchema,
} from './schema/business-detail.schema';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/localbusinessdirectory'),
    MongooseModule.forFeature([
      { name: BusinessDetail.name, schema: BusinessDetailSchema },
    ]),
  ],
  controllers: [BusinessDetailsController],
  providers: [BusinessDetailsService],
})
export class BusinessDetailsModule {}
