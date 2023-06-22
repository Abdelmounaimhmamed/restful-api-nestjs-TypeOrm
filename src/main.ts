import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
const cookieSession = require("cookie-session");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  app.use(cookieSession({
    keys : ["asdf"]
  }));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist : true
    })
  )
}
bootstrap();
