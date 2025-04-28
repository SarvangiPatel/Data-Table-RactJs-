import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Productlist from './Components/Productlist'
import AddProduct from './Components/AddProduct'
import { Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import AllRoutes from './Components/AllRoutes'

function App() {

  return (

    <>

    <Navbar />
    <AllRoutes />

      {/* <Productlist /> */}
      {/* <AddProduct /> */}

    </>
 
  )
}

export default App
