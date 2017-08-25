import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as compression from 'compression';


// import router
import PostRouter from './router/PostRouter';
import UserRouter from './router/UserRouter'

// Server class
class Server {
    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();

    }
    public config(){
        //set mongoose
        // const MONGO_URI = '';
        mongoose.connect('mongodb://localhost/api',{
            useMongoClient: true
        })

        // config
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(compression());
        this.app.use(logger('dev'));
        this.app.use(helmet());
        this.app.use(cors());

    }

    public routes(): void { 
        let router: express.Router;
        router = express.Router();

        this.app.use('/', router);
         this.app.use('/api/posts', PostRouter);
         this.app.use('/api/users', UserRouter);



    }
}

export default new Server().app;