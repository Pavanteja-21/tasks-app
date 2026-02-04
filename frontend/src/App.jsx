
import { Route, Routes } from 'react-router-dom'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import { AuthRoute } from './guard/Guard'
import TasksPage from './pages/TasksPage'

function App() {

  return (
    <>
     <Navbar />

    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />

      <Route path="/tasks" element={<AuthRoute element={<TasksPage />} />} />
    </Routes>


     <Footer />

    </>
  )
}

export default App
