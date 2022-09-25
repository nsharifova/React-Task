import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from '../page/ProductDetails';
import Home from '../page/Home';
const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product-details/:id" element={<ProductDetails/>}/>

    </Routes>
  )
}

export default MyRoutes