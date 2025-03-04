import React from 'react';
import { Route, Routes} from 'react-router-dom';
import App from '../App'
import BookingPage from '../pages/BookingPage';

function Nav() {
    return (
        <>
<nav class="navBar">
    <img src= "Logo.svg" alt="Logo" />
    <ul class="navLinks">
        <li class = "navList"><a href="/home">Home</a></li>
        <li class = "navList"><a href="littlelemon.com/about">About</a></li>
        <li class = "navList"><a href="littlelemon.com/menu">Menu</a></li>
        <li class = "navList"><a href="/reservation">Reservation</a></li>
        <li class = "navList"><a href="littlelemon.com/order-online">Order Online</a></li>
        <li class = "navList"><a href="littlelemon.com/login">Login</a></li>
    </ul>
</nav>
    
    <Routes>
    <Route exact path = '/home' element={<App/>}/>
    <Route exact path = '/reservation' element = {<BookingPage/>}/>
  </Routes>
  </>
    );
}

export default Nav;