import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
<<<<<<< HEAD
  const app = await NestFactory.create(AppModule,{ cors: true });
=======
  const app = await NestFactory.create(AppModule, {
    cors: true,
    // logger: ['log', 'error', 'warn', 'debug', 'verbose'],
    logger: console,
  });
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
  const config = new ConfigService();
  await app.listen(await config.getPortConfig());
}
bootstrap();
