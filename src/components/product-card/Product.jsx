import React from 'react'
import { Link } from 'react-router-dom'
import './product-card.scss'

const Product = ({ productInfo }) => {

  return (
    <>
<div className="col-md-6 col-lg-3 col-xl-3">
    <div className="course-item mt-3">
      <div className="card" style={{width:"18rem"}}>
      <img className="card-img-top" src={productInfo.image} alt=""/>
      <div className="card-body" style={{height:"210px"}}>
      <h5 className="card-title">{productInfo.title}</h5>
      <p className="card-text">{productInfo.price} AZN</p>
    <Link to={`/product-details/${productInfo.id}`} className="btn btn-primary">Details</Link>

  </div>
</div>
    </div>
  </div>

  </>
  )
}

export default Product