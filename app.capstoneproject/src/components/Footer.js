function Footer() {
    return (
<footer className = 'footer'>
    <img src= "Logo.svg" alt="Logo" />
    <ul className = 'footerNav'>
        <p><b>Doormat Navigation</b></p>
        <li className = 'footerLink'><a href="index.html">Home</a></li>
        <li className = 'footerLink'><a href="littlelemon.com/about">About</a></li>
        <li className = 'footerLink'><a href="littlelemon.com/menu">Menu</a></li>
        <li className = 'footerLink'><a href="littlelemon.com/reservation">Reservation</a></li>
        <li className = 'footerLink'><a href="littlelemon.com/order-online">Order Online</a></li>
        <li className = 'footerLink'><a href="littlelemon.com/login">Login</a></li>
    </ul>
    <ul className = 'footerNav'>
        <p><b>Contact</b></p>
        <li className = 'footerLink'><a href="littlelemon.com/address">Address</a></li>
        <li className = 'footerLink'><a href="littlelemon.com/phone-number">Phone number</a></li>
        <li className = 'footerLink'><a href="littlelemon.com/email">Email</a></li>
    </ul>
    <ul className = 'footerNav'>
        <p><b>Social Media</b></p>
        <li className = 'footerLink'><a href="littlelemon.com/facebook">Facebook</a></li>
        <li className = 'footerLink'><a href="littlelemon.com/instagram">Instagram</a></li>
        <li className = 'footerLink'><a href="littlelemon.com/twitter">Twitter</a></li>
    </ul>
</footer>
    );
}

export default Footer;