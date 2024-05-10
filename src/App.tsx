
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navBar/NavBar'
import Home from './pages/Home/Home'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
