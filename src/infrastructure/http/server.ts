import 'dotenv/config';
import { env } from '../env';
import { App } from './main';

const app = new App();
const port = env.PORT;

app.start(port);
