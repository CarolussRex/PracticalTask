import {
  PriceData,
  SeatData,
  ZoneData,
  ticketDto
} from "../interfaces/interfaces";
import axiosInstance from "../axios/axios";

class ticketService {
  async getOne(id: String): Promise<ticketDto[]>{
    const PerformanceID = 0;
    // Fetch seats data
    const seatsResponse = await axiosInstance.get <SeatData[] > (`Packages/${id}/Seats?constituentId=0&modeOfSaleId=26&packageId=${id}`);
    // Check if api doesn't return empty array
    if (seatsResponse.data.length < 1) {
      throw new Error("There's no tickets for this ID");
    }
    // Filter seats with SeatStatusId === 0
    const availableSeats = seatsResponse.data.filter((item) => item.SeatStatusId === 0);

    // Fetch prices data
    const pricesResponse = await axiosInstance.get < PriceData[] > (`Packages/${id}/Prices?expandPerformancePriceType=&includeOnlyBasePrice=&modeOfSaleId=26&priceTypeId=&sourceId=30885`);

    // Combine seats data with corresponding prices
    const mappedSeats = availableSeats.map(({
      SeatNumber,
      SeatRow,
      ZoneId
    }) => {
      const Price = pricesResponse.data.find((priceItem) => priceItem.ZoneId === ZoneId && priceItem.PerformanceId === PerformanceID)?.Price;
      return {
        Row: SeatRow,
        SeatNumber,
        Price,
        ZoneId,
      };
    });

    // Fetch zone data
    const zoneDataResponse = await axiosInstance.get < ZoneData[] > (`Performances/ZoneAvailabilities?performanceIds=8444`);
    const zoneData = zoneDataResponse.data;

    // Add zone descriptions to the mapped seats data
    const finalSeatData = mappedSeats.map(({
      ZoneId,
      Price,
      SeatNumber,
      Row
    }) => {
      const zoneDescription = zoneData.find((item) => item.Zone.Id === ZoneId)?.Zone.Description;
      return {
        Section: zoneDescription,
        Row,
        SeatNumber,
        Price
      };
    });

    return finalSeatData;
  }
}

export default new ticketService()