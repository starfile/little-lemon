import React from "react";
//import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, FormControl, FormLabel, FormErrorMessage, Input, Select } from '@chakra-ui/react'

function BookingForm(props) {
/*
//  const [resDate, setResDate] = useState(new Date());
  const [resDate, setResDate] = useState(() => {
    const today = new Date();
    return today.getFullYear() + '-' +
      (today.getMonth() > 9 ? '' : '0' + today.getMonth()) + today.getMonth() + '-' +
      (today.getDate() > 9 ? '' : '0') + today.getDate()
  });

  const [resTime, setResTime] = useState(props.availableTimes ? props.availableTimes[0] : null);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
*/
  const navigate = useNavigate();
/*
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
          required
        />

        <label htmlFor="res-time" value={resTime}>Choose time</label>
        <select id="res-time " value={resTime} onChange={e => setResTime(e.target.value)} required>
          {props.availableTimes ? props.availableTimes.map(availableTime => {return <option>{availableTime}</option>}) : <option>N/A</option>}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} required />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} required>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" disabled={!(resDate && resTime && guests >=1 && guests <= 10 && occasion)} />
      </fieldset>
    </form>
  )
*/
  const formik = useFormik({
    initialValues: {
      resDate: (() => {
        const today = new Date();
        return today.getFullYear() + '-' +
          (today.getMonth() > 9 ? '' : '0' + today.getMonth()) + today.getMonth() + '-' +
          (today.getDate() > 9 ? '' : '0') + today.getDate()
      })(),
      resTime: props.availableTimes ? props.availableTimes[0] : null,
      guests: 1,
      occasion: 'Birthday'
    },
    onSubmit: (values) => {
      // For debug purpose.
      //console.log(values);
      if(props.submitForm(values))
        navigate("/reservation-confirmation");

    },
    validationSchema: Yup.object({
      resDate: Yup.date().required("Required"),
      resTime: Yup.string().required("Required"),
      guests: Yup.number().min(1, "Minimum one guest").max(10, "Maximum ten guests").required("Required"),
      occasion: Yup.string().required("Required"),
    })
  })

  return (
    <form onSubmit={ formik.handleSubmit }>
      <FormControl isInvalid={ formik.errors.resDate }>
        <FormLabel htmlFor="resDate">Choose date</FormLabel>
        <Input
          id="resDate"
          name="resDate"
          type="date"
          {...formik.getFieldProps("resDate")}
          onChange={(e) => {
            const chosenDate = new Date(e.target.value);
            // For debug purpose.
            //console.log('Chosen date: ' + chosenDate);
            props.availableTimesDispatch(chosenDate);
            formik.setFieldValue("resDate", e.target.value)
          }}
          required
        />
        <FormErrorMessage>{ formik.errors.resDate }</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={ formik.errors.resTime }>
        <FormLabel htmlFor="resTime">Choose time</FormLabel>
        <Select
          id="resTime"
          name="resTime"
          {...formik.getFieldProps("resTime")}
          required
        >
          {props.availableTimes ? props.availableTimes.map(availableTime => {return <option key={availableTime}>{availableTime}</option>}) : <option>N/A</option>}
        </Select>
        <FormErrorMessage>{ formik.errors.resDate }</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={ formik.errors.guests }>
        <FormLabel htmlFor="guests">Guests</FormLabel>
        <Input
          id="guests"
          name="guests"
          type="number"
          {...formik.getFieldProps("guests")}
          required
        />
        <FormErrorMessage>{ formik.errors.guests }</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={ formik.errors.occasion }>
        <FormLabel htmlFor="occasion">Occasion</FormLabel>
        <Select
          id="occasion"
          name="occasion"
          {...formik.getFieldProps("occasion")}
          required
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </Select>
        <FormErrorMessage>{ formik.errors.resDate }</FormErrorMessage>
      </FormControl>
      <Button type="submit" isDisabled={!formik.isValid} aria-label="On Click">Make Your reservation</Button>
    </form>
  )
}

export default BookingForm;
