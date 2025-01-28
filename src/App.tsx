import './App.css'
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Works } from './pages/Works';
import { Socials } from './pages/Socials';

function App() {
  return (
    <>
      <Navbar />

      <div className='pt-14'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/works' element={<Works />} />
          <Route path='/socials' element={<Socials />} />
        </Routes>
      </div>

      <Footer/>
    </>
  )
}

export default App
