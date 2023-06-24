import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/CartAction";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";
import CartItemCard from "./CartItemCard.js";
import BottomTab from "../../more/BottomTab";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { useEffect, useState } from "react";
import { getCartItems , deleteCartItem, updateCartItem, getVariantDetail} from "../../service/cartApi";

const Cart = ({ history }) => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  let cartItems2 = JSON.parse(localStorage.getItem('cartItems'));






  const [items,setItems]=useState([]);

  const [variantList,setVariantList]= useState([]);
 

  const [tPrice,setTotalPrice]=useState(100);



useEffect(()=>{
            getItems();
},[]);


useEffect(()=>{

  getVariantData();

},[items.length])




const getVariantData= async()=>{


  

  const data=cartItems2;

  
  let deatils=[];
  for(let i=0;i<data.length;i++){
    if(data[i].size===undefined){
       continue;
    }
    const getVariant=await getVariantDetail(data[i].productName,data[i].size);
      deatils.push(getVariant);
   }


  setVariantList(deatils);
}





   const  getItems= async()=>{
          // const data=await getCartItems();
          // if(data){
          //   setItems(data);          
          //   let total=0;
          //   for(let i=0;i<data.length;i++){
          //     total+=data[i]?.productPrice * data[i]?.quantity
          //   }
          //     setTotalPrice(total);
          // }
          const data=JSON.parse(localStorage.getItem('cartItems'));

         
         

          setItems(data);          
            let total=0;
            for(let i=0;i<data.length;i++){
              total+=data[i]?.productPrice * data[i]?.quantity
            }
            setTotalPrice(total);
           
              
   }
  let Price = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  let totalPrice = Price;

  const increaseQuantity = async(item, ind) => {

         
  

    if( variantList.length===item.length &&  item.quantity+1>variantList[ind].Stock){

      return toast.error("Product Stock Limited");
    }

    else{
      const index = cartItems2.findIndex(p => p.productId === item.productId && p.size === item.size);
      cartItems2[index].quantity+=1;

  localStorage.setItem('cartItems', JSON.stringify(cartItems2));
    getItems();

    }
  
    

    
  };

  const decreaseQuantity = async(item, quantity) => {

    if(quantity==1) return ;
      
    const index = cartItems2.findIndex(p => p.productId === item.productId && p.size === item.size);

    cartItems2[index].quantity-=1;

    localStorage.setItem('cartItems', JSON.stringify(cartItems2));
    getItems();




  };

  const deleteCartItems = async(item) => {
      
      const updateCart = cartItems2.filter(obj =>  obj.productId !== item.productId || obj.size !== item.size);
       

         localStorage.setItem('cartItems', JSON.stringify(updateCart));
         getItems();
        
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <>
     
      {items.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />
          <Typography>No Items In Cart</Typography>
          <Link to="/products">View Products</Link>
          <BottomTab />
        </div>
      ) : (
        <>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
{items.length>0 &&
              items?.map((item, index) => (
                  
                
                <div className="cartContainer" key={index}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems}  />
                  <div className="cartInput">
                    <button
                      onClick={() =>
                        decreaseQuantity(item, item?.quantity)
                      }
                    >
                      - 
                    </button>
                    {/* <input type="number"  value={item.quantity}  readOnly /> */}
                    <div className="cartInputQuant" > {item.quantity} </div>
                    <button
                      onClick={() =>
                        increaseQuantity(item, index )
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="cartSubtotal"> {`₹${item.productPrice * item.quantity }`}</p>
                </div>
                
              ))}

            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Price Total</p>
                {/* <p>₹ {totalPrice}</p> */}
                <p>₹ {tPrice}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button onClick={checkoutHandler}>Check Out</button>
              </div>
            </div>
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Cart;