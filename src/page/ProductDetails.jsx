import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AddToCart } from '../Redux/Action/CartAction';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    console.log(product);

    const dispatch = useDispatch();
    const {cartItems}=useSelector(state=>state.cart)
  
    const getInfo=async(myId)=>{
    fetch(`https://fakestoreapi.com/products/${myId}`)
    .then(res=>res.json())
    .then(json=>setProduct(json))
  
    }
    useEffect(()=>{
      getInfo(id)
    },[id]);

    const handleAddToCart=(id)=>{
        const findItem=cartItems.length > 0 ?cartItems.find(ct=>ct.id===id) : null;
        const quantity=findItem ? findItem.quantity + 1 : 1;
        dispatch(AddToCart(id,quantity))
      }
  return (


    <div className="product-detail mt-5">

    <div className='container'>
        <div className='row'>
          <div className='col-lg-5'>
            <div className="product-img">
              <img width={"70%"} alt="" src={product.image}></img>
            </div>

          </div>
          <div className='col-lg-7'>
            <div className="product-info">
              <h3 className='mt-3'>Title:{product.title}</h3>
              <p className='mt-3'>{product.description}</p>
              <h4 className='mt-3'>Price:{product.price} AZN</h4>
              <button onClick={()=>handleAddToCart(product.id) } className="btn btn-outline-dark my-3 w-100">
                  Add To Cart
                </button>
                        
                </div>
          </div>
        </div>
      </div>
    </div>  
    )
}

export default ProductDetails