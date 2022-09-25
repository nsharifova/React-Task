
import { ADDTOCART } from "../Constants/CartConstants";
import axios from "axios"

export const AddToCart=(id,qty)=>async(dispatch,getState)=>{
    
    const { data }=await axios.get(`https://fakestoreapi.com/products/${id}`);
    const product={
        id:data.id,
        name:data.title,
        price:data.price,
        rating:data.rating,
        image:data.image,
        quantity:qty,
    } 

    dispatch({type:ADDTOCART,payload:product})
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}
