import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';

//Components
import Loader from './components/Loader';

import { Home } from './pages/Home';
import { DevelopersMarqueeFetchData } from './pages/HomeComponents/DevelopersMarquee';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  useEffect(() => {
    setLoadingSpinner(true);

    try {
      DevelopersMarqueeFetchData();
    } finally {
      setLoadingSpinner(true);
    }

    setTimeout(() => {
      setLoadingSpinner(false);
    }, 3000)
  }, [])

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
