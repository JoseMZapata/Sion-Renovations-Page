import { v2 as cloudinary } from 'cloudinary';
import { ConfigService } from '@nestjs/config';

export const CLOUDINARY = 'CLOUDINARY';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (config: ConfigService) => {
    const cloudName = config.get<string>('CLOUDINARY_CLOUD_NAME');
    const apiKey = config.get<string>('CLOUDINARY_API_KEY');

    // Log temporal para verificar
    console.log('☁️  Cloud name:', cloudName);
    console.log('🔑 API Key:', apiKey ? '✅ cargada' : '❌ undefined');

    return cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: config.get<string>('CLOUDINARY_API_SECRET'),
    });
  },
  inject: [ConfigService],
};