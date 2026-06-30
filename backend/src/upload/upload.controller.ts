import {
  Controller,
  Post,
  Delete,
  Get,
  Param,
  Query,
  UploadedFiles,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

const imageFilter = (_, file, cb) => {
  if (!file.mimetype.match(/\/(jpg|jpeg|png|webp)$/)) {
    return cb(new BadRequestException('Solo se aceptan imágenes JPG, PNG o WebP'), false);
  }
  cb(null, true);
};

const uploadOptions = {
  storage: undefined, // usa memoria (sin guardar en disco)
  fileFilter: imageFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB por imagen
};

@Controller('upload')
export class UploadController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  // POST /upload/proyecto?nombre=edificio-norte
  @Post('proyecto')
  @UseInterceptors(FilesInterceptor('files', 20, uploadOptions))
  async subirProyecto(
    @UploadedFiles() files: Express.Multer.File[],
    @Query('nombre') nombre: string = 'sin-nombre',
  ) {
    if (!files?.length) throw new BadRequestException('No se enviaron archivos');

    const results = await this.cloudinaryService.uploadProyecto(files, nombre);
    return results.map((r) => ({
      url:      r.secure_url,
      publicId: r.public_id,
      ancho:    r.width,
      alto:     r.height,
    }));
  }

  // POST /upload/avance?nombre=edificio-norte
  @Post('avance')
  @UseInterceptors(FilesInterceptor('files', 20, uploadOptions))
  async subirAvance(
    @UploadedFiles() files: Express.Multer.File[],
    @Query('nombre') nombre: string = 'sin-nombre',
  ) {
    if (!files?.length) throw new BadRequestException('No se enviaron archivos');

    const results = await this.cloudinaryService.uploadAvance(files, nombre);
    return results.map((r) => ({
      url:      r.secure_url,
      publicId: r.public_id,
      ancho:    r.width,
      alto:     r.height,
    }));
  }

  // DELETE /upload/:publicId  (publicId viene URL-encoded desde Angular)
  @Delete(':publicId')
  async eliminar(@Param('publicId') publicId: string) {
    await this.cloudinaryService.deleteImage(publicId);
    return { mensaje: 'Imagen eliminada correctamente' };
  }
  @Get('test-env')
    testEnv() {
    const { v2: cloudinary } = require('cloudinary');
    const config = cloudinary.config();
    return {
        cloud_name: config.cloud_name ?? '❌ undefined',
        api_key:    config.api_key    ?? '❌ undefined',
        api_secret: config.api_secret ? '✅ cargado' : '❌ undefined',
    };
    }
}