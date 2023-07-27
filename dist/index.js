"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ticketRoute_1 = __importDefault(require("./routes/ticketRoute"));
const PORT = 2400;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/ticket", ticketRoute_1.default);
const startApp = () => {
    try {
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    }
    catch (e) {
        console.log(e);
    }
};
startApp();
