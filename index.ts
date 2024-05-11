import { Server } from './src/server';
import express from 'express';
import * as config from './src/configurations';
import helmet from 'helmet';

const appExpress = express();
appExpress.disable('x-powered-by');

appExpress.use(helmet.hidePoweredBy());
const { port } = config.app;

const server = new Server(appExpress);
server.start(port);
