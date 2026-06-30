const { NestFactory } = require('@nestjs/core');
const { ExpressAdapter } = require('@nestjs/platform-express');
const express = require('express');

let cachedApp;

async function bootstrap() {
  const server = express();
  const { AppModule } = require('../dist/app.module');
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS?.split(',').map(s => s.trim()) || '*',
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Accept,Authorization',
  });

  await app.init();
  return server;
}

module.exports = async (req, res) => {
  if (!cachedApp) {
    cachedApp = await bootstrap();
  }
  cachedApp(req, res);
};
