import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Hub from './Components/Hub'
import '../src/Components/Hub.css'
import CreateUser from './Components/CreateUser'
import UpdateUser from './Components/UpdateUser'
import Login from './Components/Login'
import Logout from './Components/Logout'
import SignupPage from './Components/SignupPage'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hub/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
