import {
    Router
} from "express";
import ticketController from "../controllers/ticketController";

const ticketRoute = Router();

ticketRoute.get("/:id", ticketController.getOne);

export default ticketRoute