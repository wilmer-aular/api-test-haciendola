import { Express } from 'express';
import apiRouter from './routes/apiRouter';
import bodyParser from 'body-parser';
import cors from 'cors';
import expressFileUpload from 'express-fileupload';
import health from './routes/health';

export class Server {
  private app: Express;
  constructor(app: Express) {
    this.app = app;

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(expressFileUpload());

    this.app.use(health);
    this.app.use('/api', apiRouter);
  }

  public start(port: number): void {
    this.app.listen(port, () =>
      console.info(`Server listening on port ${port}!`)
    );
  }
}
