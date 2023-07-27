"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const ticketService_1 = __importDefault(require("../services/ticketService"));
describe("Testing ticketService method", () => {
    it("Testing on a valid ID", () => __awaiter(void 0, void 0, void 0, function* () {
        const tickets = yield ticketService_1.default.getOne("1195");
        (0, chai_1.expect)(tickets).to.be.an("Array");
        (0, chai_1.expect)(tickets.length).to.be.above(4);
        (0, chai_1.expect)(tickets[0].Section).to.be.equal("Balcony A-B");
        (0, chai_1.expect)(tickets[0].Row).to.be.equal("A");
        (0, chai_1.expect)(tickets[0].SeatNumber).to.be.equal(115);
        (0, chai_1.expect)(tickets[0].Price).to.be.equal(401);
    }));
});
