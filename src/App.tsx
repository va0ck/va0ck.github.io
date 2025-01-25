import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

//Components
import Loader from './components/Loader';

import { Home } from './pages/Home';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Works } from './pages/Works';
import { Tools } from './pages/Tools';

function App() {
  const [loadingSpinner] = useState(false);

  return (
    <>
      {loadingSpinner ? 
      (<Loader/>) : 
      (<>
        <Navbar />

        <div className='pt-14'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='works' element={<Works />} />
            <Route path='tools' element={<Tools />} />
          </Routes>
        </div>

        <Footer/>
      </>)}
    </>
  )
}

export default App
