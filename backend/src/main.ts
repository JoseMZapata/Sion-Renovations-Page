import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS?.split(',').map(s => s.trim()) || 'http://localhost:4200',
    credentials: true,
  });

  await app.listen(3000);
  console.log('Backend corriendo en http://localhost:3000');
}

bootstrap();