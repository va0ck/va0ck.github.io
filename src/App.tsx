import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';

//Components
import Loader from './components/Loader';
import { Home } from './pages/Home';
import Navbar from './components/Navbar';

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

        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </>)}
    </>
  )
}

export default App
