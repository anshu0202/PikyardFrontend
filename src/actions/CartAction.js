import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
    ADD_TO_CART_ERROR,
  } from "../constans/CartConstans";
  import axios from "axios";

import { addToCart } from "../service/cartApi";
  
  // Add to Cart ---Product
  // export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    
    export const addItemsToCart = (product) => async (dispatch, getState) => {
    try{

      // const data= await addToCart(product);
  
      let cart = JSON.parse(localStorage.getItem('cartItems'));
      for(let i=0;i<cart.length;i++){
        if(cart[i].productId===product.productId && cart[i].size ===product.size){
          cart[i].quantity=product.quantity;
         
          localStorage.setItem('cartItems', JSON.stringify(cart));
          return;
        }
      }

      cart.push(product);
      localStorage.setItem('cartItems', JSON.stringify(cart));
      const data=cart;

      if(data){
          
        dispatch({type:ADD_TO_CART, payload: data})
      }
    }
    catch(error){
      console.log("error is ",error.message)
      // dispatch({type:ADD_TO_CART_ERROR, payload:error.message})
    }
    

  


    // dispatch({
    //   type: ADD_TO_CART,
    //   payload: {
    //     product: data.product._id,
    //     name: data.product.name,
    //     price: data.product.price,
    //     image: data.product.images[0].url,
    //     stock: data.product.Stock,
    //     quantity,
    //   },
    // });
    // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };

  // REMOVE FROM CART ---Product
  export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
    // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };


  // SAVE SHIPPING INFO 
  export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });
  
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };