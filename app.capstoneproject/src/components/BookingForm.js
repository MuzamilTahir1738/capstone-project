import {useState, useEffect} from 'react';
import {useFormik} from 'formik';
function BookingForm() {

const [date, setDate] = useState();
const [time, setTime] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
const [guests, setGuests] = useState();
const [occasion, setOccasion] = useState(['Birthday', 'Anniversary'])

const handleDateChange = (e) => {
   setDate(e.target.value)
};
const handleTimeChange = (e) => {
   setTime(e.target.value)
};
const handleGuestsChange = (e) => {
   setGuests(e.target.value)
};
const handleOccasionChange = (e) => {
   setOccasion(e.target.value)
};
const handleSubmit = (e) => {
   e.preventDefault();
   console.log(`Reservation made for ${occasion} with ${guests} guests at ${time} ${date}` )
}
   return(
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
   <label htmlFor="res-date">Choose date</label>
   <input
   type="date"
   id="res-date"
   onChange={handleDateChange}
   />
   <label htmlFor="res-time">Choose time</label>
   <select
   id="res-time "
   onChange={handleTimeChange}
   >
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
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