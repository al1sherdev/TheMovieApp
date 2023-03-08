import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import Search from '../../pages/Search';
import Series from '../../pages/Series';
import SingleMovie from '../../pages/SingleMovie';
import Trends from '../../pages/Trends';

// components
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function Routing() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={ <Home />}/> 
          <Route path='/trends/pages/:page' element={ <Trends /> }/> 
          <Route path='/movies/pages/:page' element={ <Movies /> }/>
          <Route path='/series/pages/:page' element={ <Series />}/>
          <Route path='/search' element={ <Search /> }/>
          <Route path='/single-movie/:id' element={<SingleMovie />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Routing;
