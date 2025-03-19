import {BrowserRouter, Routes,Route} from 'react-router-dom'
import PublicRoute from './PublicRoute'
import Login from '../pages/Login'
import Main from '../Layout/Main'
import Dashboard from '../pages/Dashboard'
import Student from '../pages/Student'
import Roles from '../pages/Roles'
import NotFound from '../pages/NotFound'
import Teacher from '../pages/Teacher'
import Parent from '../pages/Parent'
const Router = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<PublicRoute/>}>
            <Route path="/" element={<Login/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
        {/* Protect Routes */}
        <Route path="/" element={<Main/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/student" element={<Student/>}/>
        <Route path="/roles" element={<Roles/>}/>
        <Route path="/parent" element={<Parent/>}/>
        <Route path="/teacher" element={<Teacher/>}/>
        </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default Router