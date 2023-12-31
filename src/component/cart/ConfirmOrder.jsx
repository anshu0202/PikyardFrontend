import React, { useState, useEffect } from "react";
import "./ConfirmOrder.css";
import { useSelector } from "react-redux";
import CheckoutSteps from "./CheckoutSteps";
import MetaData from "../../more/Metadata";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import BottomTab from "../../more/BottomTab";
import { getCartItems } from "../../service/cartApi";



const ConfirmOrder = ({ history }) => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  const { user } = useSelector((state) => state.user);


  const cartItems2 = JSON.parse(localStorage.getItem('cartItems'));



  const [orderList, setOrderList]=useState([]);
   const [subtotal, setTotalPrice]=useState(0);

   const [shippingCharges, setShippingCharges]=useState(0);

  let productPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  // const subtotal = productPrice
  // eslint-disable-next-line
  // const shippingCharges = productPrice > 99 ? 0 : 50;

  const totalPrice = subtotal + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.state}, ${shippingInfo.country}`;


  useEffect(async()=>{
      // const data=await getCartItems();
      const data=cartItems2
      if(data){
        
        setOrderList(data);
        let price=0;
          for(let i=0;i<data?.length;i++){
              price+=data[i]?.productPrice*data[i]?.quantity
          }
              setTotalPrice(price);
              setShippingCharges(price > 99 ? 50 : 150);
      }
  },[]);

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      totalPrice,
    };

    
    localStorage.setItem("orderInfo", JSON.stringify(data));

  
    history.push("/process/payment");
  };

  return (
    <>
      <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Shipping Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>


            {/* {cartItems.length === 0 ? */}
            { orderList?.length === 0 ?
              <div className="confirmCartItemsContainer">
                ""
              </div>
              :
              <div className="confirmCartItemsContainer">
                {/* {cartItems.map((item) => ( */}
                {orderList?.map((item, index) => (
                  <div key={index}>
                    <img src={item?.productImages[0]?.url} alt="Product" />
                    <Link to={`/product/${item?.productId}`}>
                      {item?.productName}
                    </Link>{" "}
                    <span>
                      {item?.quantity} X ₹{item?.productPrice} ={" "}
                      <b>₹{item?.productPrice * item.quantity}</b>
                    </span>
                  </div>
                ))
                }
              </div>
            }

          </div>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
            <Typography>Order Summery</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>₹{subtotal}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>₹{shippingCharges}</span>
              </div>
              <div>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>₹{totalPrice}</span>
            </div>

            <button onClick={proceedToPayment}>Proceed To Payment</button>
          </div>
        </div>
      </div>
      <BottomTab />
    </>
  );
};

export default ConfirmOrder;
