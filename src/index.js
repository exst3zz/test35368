import { setupServer } from './server.js';
import { initDBConnection } from './db/initMongoConnection.js';

async function bootstrap() {
  try {
    await initDBConnection();

    setupServer();
  } catch (err) {
    console.error(err);
  }
}

bootstrap();
