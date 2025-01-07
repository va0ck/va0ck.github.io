import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';

//Components
import Loader from './components/Loader';
import { Home } from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [loadingSpinner, setLoadingSpinner] = useState(true);

  useEffect(() => {
    if (loadingSpinner){


      setTimeout(() => {
        setLoadingSpinner(false);
      }, 0)
    }
  })

  return (
    <>
      {loadingSpinner ? 
      (<Loader/>) : 
      (<>
        <Navbar />

        <div className='pt-14'>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </div>

        <Footer/>
      </>)}
    </>
  )
}

export default App
