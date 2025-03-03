function Main() {
    return (
        <main className="main">
            <div class = 'specialsHeading'>
            <h3 class='headingSpecial'>This weeks specials</h3>
            <a class ='menuButton'href = 'littlelemon.com/menu'>Online Menu</a>
            </div>
            <div class= 'menuCard'>
            <div class = 'greekSalad'>
            <img src = {require('./greek salad.jpg')} width = '100px' alt = "greeksalad" class = 'greekSaladImg' />
            <h4>Greek salad</h4>
            <p>$12.99</p>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <a href = 'l'>Order a delivery </a>
            <img url= {require('./bike.svg')} alt= 'bike'/>
            </div>
            <div class="bruchetta">
            <img src ={require('./bruchetta.svg').default} alt = 'bruchetta' class= 'bruchettaImg' />
            <h4>Bruchetta</h4>
            <p>$5.99</p>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <a href = 'l'>Order a delivery </a>
            <img url= {require('./bike.svg').default} alt= 'bike'/>
            </div>
            <div class = "lemonDessert">
            <img src ={require('./lemon dessert.jpg')} alt= 'lemon' class="lemmonImg"/>
            <h4>Lemon Dessert</h4>
            <p>$5.00</p>
            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <a href = 'l'>Order a delivery </a>
            <img url= {require('./bike.svg')} alt= 'bike'/>
            </div>
            </div>
        </main>
    )
}

export default Main;