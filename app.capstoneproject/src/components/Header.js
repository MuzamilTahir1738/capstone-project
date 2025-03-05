function Header() {
    return (
        <header className = 'heading'>
           <div className = 'title'><h1>Little Lemon</h1></div>
           <div className='headingImg'><img src = {require ('./restauranfood.jpg')} alt = 'restaurant food'/></div>
            <div className = 'subHeading'><h2>Chicago</h2></div>
            <div className='description'><p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p></div>
            <div className = 'button'><a href = "littlelemon.com/reservation" className = 'reserve'>Reserve a Table</a></div>
        </header>
    );
}

export default Header;