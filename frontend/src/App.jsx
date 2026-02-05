
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import { AuthRoute } from './guard/Guard'
import TasksPage from './pages/TasksPage'
import TaskFormPage from './pages/TaskFormPage'

function App() {

  return (
    <>
     <Navbar />

    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />

      <Route path="/tasks" element={<AuthRoute element={<TasksPage />} />} />
      <Route path='/tasks/add' element={<AuthRoute element={<TaskFormPage />}/>} />
      <Route path='/tasks/edit/:id' element={<AuthRoute element={<TaskFormPage />} />} />

        {/* FALL BACK ROUTE FOR UNKNOWN PAGES */}
      <Route path='*' element={<Navigate to='/tasks' />} />
    </Routes>


     <Footer />

    </>
  )
}

export default App
