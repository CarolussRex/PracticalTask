import express, {
    Express
} from 'express';
import ticketRoute from './routes/ticketRoute';

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.BASE_URL;

const app: Express = express();

app.use(express.json());

app.use("/ticket", ticketRoute);

const startApp = () => {
    try {
        app.listen(PORT , () => console.log(`server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}
startApp()