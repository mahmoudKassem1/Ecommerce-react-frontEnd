import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContex = createContext(null);
 const getDefaultCart = ()=>{
    let cart = {};
        for (let index = 0; index < all_product.length+1; index++) {
            cart[index] = 0;

        }
    return cart;
  }
const ShopContexProvider = (props) => {
    const [cart_item , set_cart_items] = useState(getDefaultCart());

 
  const add_cart = (itemId)=>{
        set_cart_items((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cart_item)
  }

  const remove_cart = (itemId)=>{
        set_cart_items((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }


      const Contex_value = { all_products: all_product , cart_item : cart_item , add_cart : add_cart , remove_cart : remove_cart };


  return (
    <ShopContex.Provider value={Contex_value}>
      {props.children}
    </ShopContex.Provider>
  );
};

export default ShopContexProvider;
