import { Injectable } from '@nestjs/common';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import * as streamifier from 'streamifier';
import { Multer } from 'multer';

type MulterFile = Express.Multer.File;

@Injectable()
export class CloudinaryService {

  private uploadToCloud(
    file: MulterFile,
    folder: string,
  ): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: 'image',
          transformation: [
            { width: 1920, crop: 'limit' },
            { quality: 'auto', fetch_format: 'auto' },
          ],
        },
        (error, result) => {
          if (error) {
            return reject(error);
          }
          if (!result) return reject(new Error('Cloudinary no retornó resultado'));
          resolve(result);
        },
      );
      streamifier.createReadStream(file.buffer).pipe(stream);
    });
  }

  async uploadProyecto(files: MulterFile[], proyecto: string) {
    const folder = `constructora/proyectos/${proyecto}`;
    return Promise.all(files.map((f) => this.uploadToCloud(f, folder)));
  }

  async uploadAvance(files: MulterFile[], proyecto: string) {
    const folder = `constructora/avances/${proyecto}`;
    return Promise.all(files.map((f) => this.uploadToCloud(f, folder)));
  }

  async deleteImage(publicId: string) {
    return cloudinary.uploader.destroy(publicId);
  }
}