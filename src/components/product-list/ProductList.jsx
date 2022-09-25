import React, { useEffect, useState } from 'react'
import Product from '../product-card/Product'
import './product-list.scss'


const ProductList = () => {
  const [product, setProduct] = useState([]);
  console.log(product);


  const fakestore=async()=>{
  fetch("https://fakestoreapi.com/products/category/jewelery")
  .then(res=>res.json())
  .then(json=>setProduct(json))

  }
  
  useEffect(()=>{
    fakestore()
  },[])

  return (
    <>
    <section id="popular-courses" className="courses-section division">
      <div className="container">
            <div className="">
            <h1 className='text'>ProductList</h1>
            </div>
        <div className="row">
            {product.map(value=>(
               <Product key={value.id} productInfo={value}/>
            ))}
        </div>
      </div>
    </section>
  


</>
  )
}

export default ProductList