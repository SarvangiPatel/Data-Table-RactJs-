

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <>

        <div className="navbar">
            <div>Navbar</div>
            <ul>
                <li><Link to="/product" style={{padding:"0px 20px" ,textDecoration:"none", color:"white"}}>Product</Link></li>
                <li><Link to="/addproduct" style={{padding:"0px 20px" ,textDecoration:"none", color:"white"}}>Add Product</Link></li>
            </ul>
        </div>
    
    </>
    
  )
}

export default Navbar