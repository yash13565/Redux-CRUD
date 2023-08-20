import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Registration from './Screens/Home/Registration'
import Listing from './Screens/Listing/Listing'
function Routing() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/listing' element={<Listing/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing