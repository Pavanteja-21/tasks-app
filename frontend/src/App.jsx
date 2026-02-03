
import { Route, Routes } from 'react-router-dom'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {

  return (
    <>
     <Navbar />

    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>


     <Footer />

    </>
  )
}

export default App
