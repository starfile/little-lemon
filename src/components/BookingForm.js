import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function BookingForm(props) {
//  const [resDate, setResDate] = useState(new Date());
  const [resDate, setResDate] = useState(new Date());
  const [resTime, setResTime] = useState();
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(props.submitForm(e))
      navigate("/reservation-confirmation");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{display: 'grid', maxWidth: 200 + 'px', gap: 20 + 'px'}}>
      <fieldset>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={resDate}
          onChange={
            e => {
//              setResDate(e.target.value);
//              props.availableTimesDispatch(e.target.value);
              if(e.target.value) {

                const chosenDate = new Date(e.target.value);
                // For debug purpose.
//                console.log('Chosen date: ' + chosenDate);
                setResDate(e.target.value);
                console.log(e.target.value);
                props.availableTimesDispatch(chosenDate);

              }
            }
          }
        />

        <label htmlFor="res-time" value={resTime} onChange={e => setResTime(e.target.value)}>Choose time</label>
        <select id="res-time ">
          {props.availableTimes ? props.availableTimes.map(availableTime => {return <option>{availableTime}</option>}) : <option>N/A</option>}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)}/>

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </fieldset>
    </form>
  );
}

export default BookingForm;
