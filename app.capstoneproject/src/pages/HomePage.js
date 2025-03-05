import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/HomeMain";
import Footer from "../components/Footer";




function Home() {
    return(
        <div className="container">
        <Nav />
        <Header />
        <Main />
        <Footer />
        </div>
    )
}
export default Home;