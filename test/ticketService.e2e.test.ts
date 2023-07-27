import ticketService from '../services/ticketService';
import {
  expect
} from 'chai';


describe('ticketService testing', () => {
  it('Should return correct ticket data for a valid event ID', async () => {
    const id = '1195';
    const result = await ticketService.getOne(id);

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
    expect(result).to.deep.include.members(expectedData);
  }, 5000);

  it('Should return correct ticket data for another valid event ID', async () => {
    const id = '1194';
    const result = await ticketService.getOne(id);

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
    expect(result).to.deep.include.members(expectedData);
  }, 5000);

  it('Should throw an error for an invalid event ID', async () => {
    const id = '7777';
    try {
      await ticketService.getOne(id);
      throw new Error('Expected ticketService.getOne() to throw an error.');
    } catch (error: any) {
      expect(error.message).to.equal("There's no tickets for this ID");
    }
  })
});