import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const APP_NAME = 'Sales app';
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  // Swagger
  const nodeEnv = configService.get('NODE_ENV') || 'development';
  if ('development' === nodeEnv) {
    const config = new DocumentBuilder()
      .setTitle(`${APP_NAME} - API`)
      .setDescription('Description')
      .setVersion('1.0')
      .addTag(`${APP_NAME}_API`)
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  // CORS, payload limit
  app.use(json({ limit: '10mb' }));
  app.use(urlencoded({ extended: true, limit: '10mb' }));
  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };
  app.enableCors(options);

  // Global validation
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // Port
  const PORT = process.env.PORT || 3000;
  app
    .listen(PORT, () => {
      console.log(`${APP_NAME} api is running on port ${PORT}`);
    })
    .then(() => {});
}
bootstrap();
