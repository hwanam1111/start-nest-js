import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // 유효하지 않은 값이 들어오면 request를 막음
      transform: true, // 원하는 타입으로 변환
    }),
  );
  await app.listen(3000);
}
bootstrap();
