import './App.css';
import Home from './pages/HomePage.js'
import BookingPage from './pages/BookingPage.js';
import { Routes, Route, Navigate} from 'react-router-dom';

import Main from './components/Main.js';

function App() {
  <Main/>

  return (
    <>
        <Routes>
        <Route index element={<Navigate to="/home" replace />} />
        <Route exact path = '/home/*' element={<Home/>}/>
        <Route exact path = '/reservation/*' element = {<BookingPage/>}/>
      </Routes>
      </>
  );
}

export default App;
