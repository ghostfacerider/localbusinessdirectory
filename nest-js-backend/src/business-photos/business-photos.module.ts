import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessPhotosController } from './business-photos.controller';
import { BusinessPhotosService } from './business-photos.service';
import { BusinessPhoto, BusinessPhotoSchema } from './schema/business-photos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BusinessPhoto.name, schema: BusinessPhotoSchema }]),
  ],
  controllers: [BusinessPhotosController],
  providers: [BusinessPhotosService],
})
export class BusinessPhotosModule {}
