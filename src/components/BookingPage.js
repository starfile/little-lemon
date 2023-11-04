import React from "react";
import BookingForm from "./BookingForm";

function BookingPage(props) {
  return <BookingForm availableTimes={props.availableTimes} availableTimesDispatch={props.availableTimesDispatch} submitForm={props.submitForm} />
}

export default BookingPage;
