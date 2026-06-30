import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertiesModule } from './properties/properties.module';
import { ConfigModule } from '@nestjs/config';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [PropertiesModule,ConfigModule.forRoot({ isGlobal: true }),
    UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
