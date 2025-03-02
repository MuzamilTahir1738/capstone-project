function Header() {
    return (
        <header class = 'heading'>
           <h1 class = 'title'>Little Lemon</h1>
            <h2 class ='subHeading'>Chicago</h2>
            <img class = 'headingImg' src = {require ('./restauranfood.jpg')} alt = 'restaurant food' />
            <p class = 'description'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <a href = "littlelemon.com/reservation" class = "reserveButton">Reserve a Table</a>
        </header>
    );
}

export default Header;