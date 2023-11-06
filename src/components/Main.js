import React from "react";
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from '../api.js';
import ConfirmedBooking from "./ConfirmedBooking.js";

function initializeTimes() {
//  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const data = fetchAPI(new Date());
  return data;
}

function updateTimes(state, action) {
//  return initializeTimes();
  const data = fetchAPI(action);
  // For debug purpose.
  //console.log(data);
  return data;
}

function submitForm(formData) {
  const result = submitAPI(formData);
  return result;
}

function Main(props) {
//  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const [availableTimes, availableTimesDispatch] = useReducer(updateTimes, initializeTimes())

  return <main>
{/*
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
    </Routes>
*/}
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} availableTimesDispatch={availableTimesDispatch} submitForm={submitForm} />} />
        <Route path="/reservation-confirmation" element={<ConfirmedBooking />} />
      </Routes>
  </main>;
}

export default Main;
export { initializeTimes, updateTimes };

