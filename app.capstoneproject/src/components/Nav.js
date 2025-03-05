import React from 'react';

function Nav() {
    return (
        <>
<nav className="navBar">
    <img src= "Logo.svg" alt="Logo" />
    <ul className="navLinks">
        <li className = "navList"><a href="/">Home</a></li>
        <li className = "navList"><a href="littlelemon.com/about">About</a></li>
        <li className = "navList"><a href="littlelemon.com/menu">Menu</a></li>
        <li className = "navList"><a href="/booking">Reservation</a></li>
        <li className = "navList"><a href="littlelemon.com/order-online">Order Online</a></li>
        <li className = "navList"><a href="littlelemon.com/login">Login</a></li>
    </ul>
</nav>
  </>
    );
}

export default Nav;