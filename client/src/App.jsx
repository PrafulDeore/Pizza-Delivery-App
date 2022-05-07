import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import Home from './Screens/Home'
import{Routes,Route} from "react-router-dom"
import Cart from './Screens/Cart'
import MediaControlCard from './Screens/Cart'

function App() {

  return (
    <div className="App">
      <Navbar/>
     
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<MediaControlCard/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
