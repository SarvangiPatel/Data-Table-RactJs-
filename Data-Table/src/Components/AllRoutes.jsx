

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import ProductDetails from './ProductDetails'
import Productlist from './ProductList'

const AllRoutes = () => {
  return (
    
    <>

<div>
            <Routes>

                <Route path="/product" element={<Productlist />} />
                <Route path="/addproduct" element={<AddProduct />} />

                <Route path='/editproduct/:id' element={<EditProduct />} />

                <Route path='/productdetails/:id' element={<ProductDetails />} />



            </Routes>

        </div>
    
    </>


  )
}

export default AllRoutes