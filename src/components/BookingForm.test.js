import {render, screen, waitFor, act, fireEvent} from '@testing-library/react';
import BookingForm from './BookingForm';
import {initializeTimes, updateTimes} from './Main';
import { BrowserRouter } from 'react-router-dom';
import { useReducer } from 'react';
import { renderHook } from '@testing-library/react'

test('Renders the BookingForm heading', () => {
//  render(<BookingForm />);
//  render(<BrowserRouter><BookingForm /></BrowserRouter>);

  render(<BrowserRouter><BookingForm availableTimes={updateTimes(null, new Date('2023-11-04'))} availableTimesDispatch={null} submitForm={null} /></BrowserRouter>);
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

test('Validate correct attributes are applied to resDate', () => {
  const { container } = render(<BrowserRouter><BookingForm availableTimes={updateTimes(null, new Date('2023-11-04'))} availableTimesDispatch={null} submitForm={null} /></BrowserRouter>);
  resDate = container.querySelector(`input[id="resDate"]`)
  expect(resDate).toHaveAttribute('required')
})

test('Validate correct attributes are applied to resTime', () => {
  const { container } = render(<BrowserRouter><BookingForm availableTimes={updateTimes(null, new Date('2023-11-04'))} availableTimesDispatch={null} submitForm={null} /></BrowserRouter>);
  resTime = container.querySelector(`select[id="resTime"]`)
  expect(resTime).toHaveAttribute('required')
})

test('Validate correct attributes are applied to guests', () => {
  const { container } = render(<BrowserRouter><BookingForm availableTimes={updateTimes(null, new Date('2023-11-04'))} availableTimesDispatch={null} submitForm={null} /></BrowserRouter>);
  guests = container.querySelector(`input[id="guests"]`)
  expect(guests).toHaveAttribute('required')
})
test('Validate correct attributes are applied to occasion', () => {
  const { container } = render(<BrowserRouter><BookingForm availableTimes={updateTimes(null, new Date('2023-11-04'))} availableTimesDispatch={null} submitForm={null} /></BrowserRouter>);
  occasion = container.querySelector(`select[id="occasion"]`)
  expect(occasion).toHaveAttribute('required')
})

test('Test a valid resDate', async() => {

  const { result } = renderHook(() => useReducer(updateTimes, initializeTimes()));
  const [availableTimes, availableTimesDispatch] = result.current;
  const { container } = render(<BrowserRouter><BookingForm availableTimes={availableTimes} availableTimesDispatch={availableTimesDispatch} submitForm={null} /></BrowserRouter>);

  await waitFor(() => {
    resDate = container.querySelector(`input[id="resDate"]`);
  });

  const tomorrow = (() => {
    const d = new Date()
    d.setDate(d.getDate() + 1);
    return d.getFullYear() + '-' +
      (d.getMonth() > 9 ? '' : '0' + d.getMonth()) + d.getMonth() + '-' +
      (d.getDate() > 9 ? '' : '0') + d.getDate()
  })()

  await act(() => {
    fireEvent.change(resDate, {target: {value: tomorrow}})
  });
  // For debug purpose.
//  console.log(resDate.value)
  expect(container.querySelector(`div[class^="chakra-form__error-message"]`)).not.toBeInTheDocument();
})

test('Test an invalid resDate', async() => {

  const { result } = renderHook(() => useReducer(updateTimes, initializeTimes()));
  const [availableTimes, availableTimesDispatch] = result.current;
  const { container } = render(<BrowserRouter><BookingForm availableTimes={availableTimes} availableTimesDispatch={availableTimesDispatch} submitForm={null} /></BrowserRouter>);

  await waitFor(() => {
    resDate = container.querySelector(`input[id="resDate"]`);
  });

  await act(() => {
    fireEvent.change(resDate, {target: {value: 'ABC'}})
  });
  // For debug purpose.
//  console.log(resDate.value)
  expect(container.querySelector(`div[class^="chakra-form__error-message"]`)).toBeInTheDocument();
})

test('Test a valid resTime', async() => {
  const availableTimes = updateTimes(null, new Date('2023-11-04'));
  const { container } = render(<BrowserRouter><BookingForm availableTimes={availableTimes} availableTimesDispatch={null} submitForm={null} /></BrowserRouter>);

  await waitFor(() => {
    resTime = container.querySelector(`select[id="resTime"]`);
  });
  // For debug purpose.
//  console.log(resTime.value)
  await act(() => {
    fireEvent.change(resTime, {target: {value: availableTimes[2]}})
  });
  // For debug purpose.
//  console.log(resTime.value)
  expect(container.querySelector(`div[class^="chakra-form__error-message"]`)).not.toBeInTheDocument();
})

test('Test an invalid resTime', async() => {
  const availableTimes = updateTimes(null, new Date('2023-11-04'));
  const { container } = render(<BrowserRouter><BookingForm availableTimes={availableTimes} availableTimesDispatch={null} submitForm={null} /></BrowserRouter>);

  await waitFor(() => {
    resTime = container.querySelector(`select[id="resTime"]`);
  });
  // For debug purpose.
//  console.log(resTime.value)
  await act(() => {
    fireEvent.change(resTime, {target: {value: 'ABC'}})
  });
  // For debug purpose.
//  console.log(resTime.value)
  expect(container.querySelector(`div[class^="chakra-form__error-message"]`)).toBeInTheDocument();
})

test('Test a valid guests', async() => {
  const { container } = render(<BrowserRouter><BookingForm availableTimes={updateTimes(null, new Date('2023-11-04'))} availableTimesDispatch={null} submitForm={null} /></BrowserRouter>);

  await waitFor(() => {
    guests = container.querySelector(`input[id="guests"]`);
  });

  await act(() => {
    fireEvent.change(guests, {target: {value: 10}})
  });

  expect(container.querySelector(`div[class^="chakra-form__error-message"]`)).not.toBeInTheDocument();
})

test('Test an invalid guests', async() => {
  const { container } = render(<BrowserRouter><BookingForm availableTimes={updateTimes(null, new Date('2023-11-04'))} availableTimesDispatch={null} submitForm={null} /></BrowserRouter>);

  await waitFor(() => {
    guests = container.querySelector(`input[id="guests"]`);
  });

  await act(() => {
    fireEvent.change(guests, {target: {value: -1}})
  });

  expect(container.querySelector(`div[class^="chakra-form__error-message"]`)).toBeInTheDocument();
})

test('Test a valid occasion', async() => {
  const { container } = render(<BrowserRouter><BookingForm availableTimes={updateTimes(null, new Date('2023-11-04'))} availableTimesDispatch={null} submitForm={null} /></BrowserRouter>);

  await waitFor(() => {
    occasion = container.querySelector(`select[id="occasion"]`);
  });
  // For debug purpose.
//  console.log(occasion.value)
  await act(() => {
    fireEvent.change(occasion, {target: {value: 'Anniversary'}})
  });
  // For debug purpose.
//  console.log(occasion.value)
  expect(container.querySelector(`div[class^="chakra-form__error-message"]`)).not.toBeInTheDocument();
})

test('Test an invalid occasion', async() => {
  const { container } = render(<BrowserRouter><BookingForm availableTimes={updateTimes(null, new Date('2023-11-04'))} availableTimesDispatch={null} submitForm={null} /></BrowserRouter>);

  await waitFor(() => {
    occasion = container.querySelector(`select[id="occasion"]`);
  });
  // For debug purpose.
//  console.log(occasion.value)
  await act(() => {
    fireEvent.change(occasion, {target: {value: 'ABC'}})
  });
  // For debug purpose.
//  console.log(occasion.value)
  expect(container.querySelector(`div[class^="chakra-form__error-message"]`)).toBeInTheDocument();
})
