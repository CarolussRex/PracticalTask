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
const axios_1 = __importDefault(require("../axios/axios"));
class ticketService {
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const PerformanceID = 0;
            // Fetch seats data
            const seatsResponse = yield axios_1.default.get(`Packages/${id}/Seats?constituentId=0&modeOfSaleId=26&packageId=${id}`);
            // Check if api doesn't return empty array
            if (seatsResponse.data.length < 1) {
                throw new Error("There's no tickets for this ID");
            }
            // Filter seats with SeatStatusId === 0
            const availableSeats = seatsResponse.data.filter((item) => item.SeatStatusId === 0);
            // Fetch prices data
            const pricesResponse = yield axios_1.default.get(`Packages/${id}/Prices?expandPerformancePriceType=&includeOnlyBasePrice=&modeOfSaleId=26&priceTypeId=&sourceId=30885`);
            // Combine seats data with corresponding prices
            const mappedSeats = availableSeats.map(({ SeatNumber, SeatRow, ZoneId }) => {
                var _a;
                const Price = (_a = pricesResponse.data.find((priceItem) => priceItem.ZoneId === ZoneId && priceItem.PerformanceId === PerformanceID)) === null || _a === void 0 ? void 0 : _a.Price;
                return {
                    Row: SeatRow,
                    SeatNumber,
                    Price,
                    ZoneId,
                };
            });
            // Fetch zone data
            const zoneDataResponse = yield axios_1.default.get(`Performances/ZoneAvailabilities?performanceIds=8444`);
            const zoneData = zoneDataResponse.data;
            // Add zone descriptions to the mapped seats data
            const finalSeatData = mappedSeats.map(({ ZoneId, Price, SeatNumber, Row }) => {
                var _a;
                const zoneDescription = (_a = zoneData.find((item) => item.Zone.Id === ZoneId)) === null || _a === void 0 ? void 0 : _a.Zone.Description;
                return {
                    Section: zoneDescription,
                    Row,
                    SeatNumber,
                    Price
                };
            });
            return finalSeatData;
        });
    }
}
exports.default = new ticketService();
