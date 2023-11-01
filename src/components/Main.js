import React from "react";
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import {Routes, Route} from 'react-router-dom'

function Main(props) {
  return <main>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
    </Routes>
  </main>;
}

export default Main;
