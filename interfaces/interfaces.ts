interface SeatData {
  SeatStatusId: number;
  SeatNumber: string;
  SeatRow: string;
  ZoneId: number;
}

interface ticketDto {
  Section: string | undefined;
  Row: string;
  SeatNumber: string;
  Price: number | undefined;
}

interface PriceData {
  ZoneId: number;
  PerformanceId: number;
  Price: number;
}

interface ZoneData {
  Zone: {
    Id: number;
    Description: string;
  };
}

export {
  SeatData,
  PriceData,
  ZoneData,
  ticketDto
}