"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ticketController_1 = __importDefault(require("../controllers/ticketController"));
const ticketRoute = (0, express_1.Router)();
ticketRoute.get("/:id", ticketController_1.default.getOne);
exports.default = ticketRoute;
