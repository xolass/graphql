import {initializeControllers} from './controllers/index.controllers';
import {initializeRouter} from './router/index.router';
import {app} from './server';
import {initializeServices} from './services/index.services';

const services = initializeServices();
const controllers = initializeControllers(services);
const router = initializeRouter(controllers);

app.use('/v1', router);

