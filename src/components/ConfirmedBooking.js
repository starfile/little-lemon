import React from "react";
import photo from '../assets/images/confirmed-booking.jpg';

function ConfirmedBooking(props) {

  return (
    <>
      <h1>Your booking has been confirmed.</h1>
      <img id="confirmed-booking-photo" src={photo} alt="Confirmed booking"></img>
    </>
  );
}

export default ConfirmedBooking;
