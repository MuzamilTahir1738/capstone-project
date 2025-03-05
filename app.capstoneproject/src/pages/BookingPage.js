import BookingForm from '../components/BookingForm';
import Nav from '../components/Nav';
import React ,{ useReducer } from 'react';


export const initializeTimes = () => ({
  availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
});


const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_AVAILABLE_TIMES':
      return {
        ...state,
        availableTimes: action.payload
      };
    default:
      return state;
  }
};
export const updateTimes = (selectedTime, dispatch) => {

    const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    dispatch({ type: 'SET_AVAILABLE_TIMES', payload: times });
  };

const BookingPage = () => {

  const [state, dispatch] = useReducer(availableTimesReducer, initializeTimes());


    return (
    <>
    <Nav/>
    <BookingForm availableTimes={state.availableTimes}
        updateTimes={(selectedTime) => updateTimes(selectedTime, dispatch)}/>
    </>
    )
}


export default BookingPage;