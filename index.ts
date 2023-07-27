import express, {
    Express
} from 'express';
import ticketRoute from './routes/ticketRoute';

const PORT = 2400;

const app: Express = express();

app.use(express.json());

app.use("/ticket", ticketRoute);

const startApp = () => {
    try {
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}
startApp()