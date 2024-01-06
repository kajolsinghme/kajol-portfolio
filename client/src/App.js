import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Playlist from './components/Playlist';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/playlist' element={<Playlist/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
