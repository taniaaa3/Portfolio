import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import AboutMe from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
