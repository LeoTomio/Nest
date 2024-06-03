import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,//recebe apenas as informações que estao no dto, as outras ignora,
    forbidNonWhitelisted: true, // da erro caso alguma informação que no estiver no dto seja passada, retornando os campos não desejados
    transform: true, //Transforma automatico a tipagem dos dadaos, por exemplo eu espero um id tipo number e recebo ele como string, ele converte automatico
  }))

  await app.listen(3000);
}
bootstrap();
