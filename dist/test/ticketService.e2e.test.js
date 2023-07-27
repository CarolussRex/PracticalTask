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
const ticketService_1 = __importDefault(require("../services/ticketService"));
const chai_1 = require("chai");
describe('ticketService testing', () => {
    it('Should return correct ticket data for a valid event ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const id = '1195';
        const result = yield ticketService_1.default.getOne(id);
        const expectedData = [{
                Section: 'Balcony A-B',
                Row: 'A',
                SeatNumber: '115',
                Price: 401
            },
            {
                Section: 'Balcony A-B',
                Row: 'A',
                SeatNumber: '116',
                Price: 401
            },
        ];
        (0, chai_1.expect)(result).to.deep.include.members(expectedData);
    }), 5000);
    it('Should return correct ticket data for another valid event ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const id = '1194';
        const result = yield ticketService_1.default.getOne(id);
        const expectedData = [{
                Section: 'Balcony A-B',
                Row: 'A',
                SeatNumber: '120',
                Price: 401
            },
            {
                Section: 'Balcony A-B',
                Row: 'A',
                SeatNumber: '121',
                Price: 401
            },
        ];
        (0, chai_1.expect)(result).to.deep.include.members(expectedData);
    }), 5000);
    it('Should throw an error for an invalid event ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const id = '7777';
        try {
            yield ticketService_1.default.getOne(id);
            throw new Error('Expected ticketService.getOne() to throw an error.');
        }
        catch (error) {
            (0, chai_1.expect)(error.message).to.equal("There's no tickets for this ID");
        }
    }));
});
