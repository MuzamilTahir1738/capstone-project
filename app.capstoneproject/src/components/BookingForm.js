import {useState} from 'react';
// import {useFormik} from 'formik';
const BookingForm = ({availableTimes, updateTimes}) => {

const [date, setDate] = useState();
const [guests, setGuests] = useState();
const [occasion, setOccasion] = useState(['Birthday', 'Anniversary'])



const handleDateChange = (e) => {
   setDate(e.target.value)
};

const handleGuestsChange = (e) => {
   setGuests(e.target.value)
};

const handleOccasionChange = (e) => {
   setOccasion(e.target.value)
};

// updateTimes(Event.target.value);

const handleSubmit = (e) => {
   e.preventDefault();
   console.log(`Reservation made for ${occasion} with ${guests} guests at ${date}` )
}
   return(
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
        <h2>Reserve now</h2>
   <label htmlFor="res-date">Choose date</label>
   <input
   type="date"
   id="res-date"
   onChange={handleDateChange}
   />
   <label htmlFor="res-time">Choose time</label>
   <select onChange={updateTimes}>
        {availableTimes.map(time => <option key={time}>{time}</option>)
        }
      </select>
   <label htmlFor="guests">Number of guests</label>
   <input
   type="number"
   placeholder="1"
   min="1" max="10"
   id="guests"
   onChange={handleGuestsChange}
   />
   <label htmlFor="occasion">Occasion</label>
   <select
   id="occasion"
   onChange={handleOccasionChange}
   >
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input
   type="submit"
   value="Make Your reservation"
   onSubmit={handleSubmit}
   />
</form>
    )
}
export default BookingForm