import {render, screen} from '@testing-library/react';
import BookingForm from './BookingForm';
import {initializeTimes, updateTimes} from './Main';
import { BrowserRouter } from 'react-router-dom';

test('Renders the BookingForm heading', () => {
//  render(<BookingForm />);
  render(<BrowserRouter><BookingForm /></BrowserRouter>);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
})

/*
test('Validate the behavior of the initializeTimes function', () => {
  const data = initializeTimes();
  expect(data).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
})
*/
test('Validate the behavior of the initializeTimes function', () => {
  const data = initializeTimes();
  expect(Array.isArray(data)).toBe(true);
  expect(data.length > 0).toBe(true);
})
/*
test('Validate the behavior of the updateTimes function', () => {
  const updatedData = updateTimes(null, null);
  expect(updatedData).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
})
*/
test('Validate the behavior of the updateTimes function', () => {
  const updatedData = updateTimes(null, new Date('2023-11-04'));
  // For debug purpose.
//  console.log(updatedData);
  expect(updatedData).toEqual(['17:00', '17:30', '18:00', '19:30', '20:30', '21:00', '21:30']);
})
