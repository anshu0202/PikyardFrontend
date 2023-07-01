import axios from "axios";
// const URL="http://localhost:3000/api/v2";
import API_BASE_URL from "./api";

const URL="/api/v2";

const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

//Apis for cart items
const userId=JSON.parse(localStorage.getItem("user"))?._id



export const addToCart=async(data)=>{
    try{
       
        const result= await axios.post(`${URL}/addToCart`,data);
        // const result= await axios.post(`${API_BASE_URL}${URL}/addToCart`,data);
        return result.data.cart
    }
    catch(error){
        console.log("error while posting data ", error.message);
    }
}

export const deleteCartItem= async(productId)=>{
            try{
                const response=await axios.delete(`${URL}/removeCartItem/${userId}/${productId}`)
                // const response=await axios.delete(`${API_BASE_URL}${URL}/removeCartItem/${userId}/${productId}`)
                
                return response;
            }
            catch(error){
                    console.log("error while deleting cart item ", error.message);
            }       
}


export const emptyCartItem= async()=>{
    try{
        const response=await axios.delete(`${URL}/emptyCartItems/${userId}`)
        // const response=await axios.delete(`${API_BASE_URL}${URL}/emptyCartItems/${userId}`)
     
        return response;
    }
    catch(error){
            console.log("error while deleting cart item ", error.message);
    }  
}

export const getCartItems= async()=>{
    try{
       
        if(userId===undefined){
            return []
        }
         const response=await axios.get(`${URL}/cart/${userId}`)
        // const response=await axios.get(`${API_BASE_URL}${URL}/cart/${userId}`)
      
        return response.data.cartData;
    }
    catch(error){
            console.log("error while getting cart item ", error.message);
    }
}

export const updateCartItem= async(id,quantity)=>{
    const data={
        quantity
    }
    try{
        
        const result=await axios.put(`${URL}/cart/update/${id}`, data);
        // const result=await axios.put(`${API_BASE_URL}${URL}/cart/update/${id}`, data);
      
        return result;
    }
    catch(error){
        console.log("error while updating cart item ", error.message);
    }
}



//Api to get the details of selected variant of product


export const getVariantDetail=async(name,size)=>{
    try{
        let result= await axios.get(`${URL}/variantDetail/${name}/${size}`);
        // let result= await axios.get(`${API_BASE_URL}${URL}/variantDetail/${name}/${size}`);
        
        return result.data.variant
    }
    catch(error){
        console.log("error while getting variant detail ", error.message);
    }
}



export const getOrders=async()=>{
    try{
        const { data } = await axios.get(`${URL}/orders/${userId}`);
        // const { data } = await axios.get(`${API_BASE_URL}${URL}/orders/${userId}`);
        return data.order
    }
    catch(error){
        console.log("error while getting order items ",error.message);
    }
}

export const getOrder=async(id)=>{
    try{
        const { data } = await axios.get(`${URL}/order/${id}`);
        // const { data } = await axios.get(`${API_BASE_URL}${URL}/order/${id}`);
        return data.order
    }
    catch(error){
        console.log("error while getting order items ",error.message);
    }
}