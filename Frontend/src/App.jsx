import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Hub from './Components/Hub'
import '../src/Components/Hub.css'
import CreateUser from './Components/CreateUser'
import UpdateUser from './Components/UpdateUser'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hub/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update' element={<UpdateUser/>}></Route>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
