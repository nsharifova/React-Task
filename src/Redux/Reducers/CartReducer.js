import { ADDTOCART } from "../Constants/CartConstants";

export const CartReducer=(state={cartItems:[]},action)=>{
    switch (action.type) {
        case ADDTOCART:
            const item=action.payload; //qisa yazilis
            const existItem=state.cartItems.find(c=>c.id===item.id); //movcud mehsul ucun
            if(existItem){
                return {
                     ...state,
                    cartItems:state.cartItems.map(c=>c.id===existItem.id ? {...c,quantity:item.quantity ++ } : c)

                }
               
            }
            else{
                
                return {
                    ...state,
                    cartItems:[...state.cartItems,item]}
            }
        
        default:
            return state;
    }      
}


