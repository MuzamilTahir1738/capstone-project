import './App.css';
import Home from './pages/home.js'
import BookingPage from './pages/BookingPage.js';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
        <Routes>
        <Route exact path = '/home' element={<Home/>}/>
        <Route exact path = '/reservation' element = {<BookingPage/>}/>
      </Routes>
      </>
  );
}

export default App;
