// 핵심 기능 NestFactory을 사용하여 Nest 애플리케이션 인스턴스를 생성하는 애플리케이션의 엔트리 파일입니다 .

import { NestFactory } from '@nestjs/core'; // 정적 메소드를 제공한다.
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  // create()는 에플리케이션 객체를 반환한다. 이는 일련의 메소드를 제공한다.
  // app객체가 express에서 사용할 수 있는 메소드를 갖게 됨

  app.enableCors();

  const swaggerOptions = new DocumentBuilder()
    .setTitle('API swagger')
    .setDescription('API Documentation')
    .setVersion('1.0.0')
    .addServer('http://')
    .build();
  const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);

  SwaggerModule.setup('/api/docs', app, swaggerDoc, {
    swaggerUrl: '/api/docs-json',
    explorer: true,
    swaggerOptions: {
      docExpansion: 'list',
      filter: true,
      showRequestDuration: true,
    },
  });
  // swagger 생성

  await app.listen(3000);
}
bootstrap();

// npm run start
// Once the application is running, open your browser and navigate to http://localhost:3000/.
// You should see the Hello World! message.
