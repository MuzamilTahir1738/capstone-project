function Main() {
    return (
        <main className="main">
            <div className = 'specialsHeading'>
            <h3 className='headingSpecial'>This weeks specials</h3>
            <a className ='menuButton'href = 'littlelemon.com/menu'>Online Menu</a>
            </div>
            <div className= 'menuCard'>
            <div className = 'greekSalad'>
            <img src = {require('./greek salad.jpg')} alt = "greeksalad" className = 'greekSaladImg' />
            <h4>Greek salad</h4>
            <p className ='price'>$12.99</p>
            <p className= 'description'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <a href = 'l'>Order a delivery </a>
            <img url= {require('./bike.svg')} alt= 'bike'/>
            </div>
            <div className="bruchetta">
            <img src ={require('./bruchetta.svg').default} width='240px' alt = 'bruchetta' className= 'bruchettaImg' />
            <h4>Bruchetta</h4>
            <p className = 'price'>$5.99</p>
            <p className='description'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <a href = 'l'>Order a delivery </a>
            <img url= {require('./bike.svg').default} alt= 'bike' className='bike'/>
            </div>
            <div className = "lemonDessert">
            <img src ={require('./lemon dessert.jpg')} width='240px' height='160px' alt= 'lemon' className="lemonImg"/>
            <h4>Lemon Dessert</h4>
            <p className='price'>$5.00</p>
            <p className='description'>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <a href = 'l'>Order a delivery </a>
            <img url= {require('./bike.svg')} alt= 'bike'/>
            </div>
            </div>
        </main>
    )
}

export default Main;