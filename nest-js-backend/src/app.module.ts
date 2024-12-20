import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
import { LoggerModule } from './logger/logger.module';
import { LoggingMiddleware } from './logger/logging.middleware';
import { AppController } from './app.controller';
import { BusinessDetailsModule } from './business-details/business-details.module';
import { BusinessPhotosModule } from './business-photos/business-photos.module';
import { BusinessPhotoDetailsModule } from './business-photo-details/business-photo-details.module';
import { BusinessPostsModule } from './business-posts/business-posts.module';
import { BusinessReviewsModule } from './business-reviews/business-reviews.module';
import { SearchModule } from './search/search.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_DB'),
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }),
    }),
    UserModule,
    BusinessDetailsModule,
    BusinessPhotosModule,
    BusinessPhotoDetailsModule,
    BusinessPostsModule,
    BusinessReviewsModule,
    SearchModule,
    LoggerModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
