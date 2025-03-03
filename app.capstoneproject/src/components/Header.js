function Header() {
    return (
        <header class = 'heading'>
           <div class = 'title'><h1>Little Lemon</h1></div>
           <div class = 'headingImg'><img src = {require ('./restauranfood.jpg')} alt = 'restaurant food' width='240px'/></div>
            <div class = 'subHeading'><h2>Chicago</h2></div>
            <div class = 'description'><p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p></div>
            <div class = 'button'><a href = "littlelemon.com/reservation" class = 'reserve'>Reserve a Table</a></div>
        </header>
    );
}

export default Header;