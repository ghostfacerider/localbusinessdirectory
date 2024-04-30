import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessPhotoDetailsController } from './business-photo-details.controller';
import { BusinessPhotoDetailsService } from './business-photo-details.service';
import { BusinessPhotoDetails, BusinessPhotoDetailsSchema } from './schema/business-photo-details.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BusinessPhotoDetails.name, schema: BusinessPhotoDetailsSchema },
    ]),
  ],
  controllers: [BusinessPhotoDetailsController],
  providers: [BusinessPhotoDetailsService],
})
export class BusinessPhotoDetailsModule {}
