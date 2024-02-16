"use strict";

const bookings = [];
const createBooking = function (
  flightNum,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  //   numPassangers = numPassangers || 1; ES5 way
  const booking = {
    flightNum,
    numPassangers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LM13");
createBooking("LM13", 13);
createBooking("LM13", 13, 300);
createBooking("LM13", undefined, 300);
