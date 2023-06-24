import React, { useEffect, useState } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../more/Metadata";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getOrderDetails, clearErrors } from "../../actions/OrderAction";
import { useAlert } from "react-alert";
import Loading from "../../more/Loader";
import BottomTab from "../../more/BottomTab";
import { useParams } from 'react-router-dom';
import { getOrder } from "../../service/cartApi";

const MyOrderDetails = ({ match }) => {
  const { orders, error, loading } = useSelector((state) => state.myOrderDetails);

  const dispatch = useDispatch();

  const userName=JSON.parse(localStorage.getItem("user")).name;
  // console.log("userDejj  ", userDetails.name);
   
  const [order,setOrders]=useState({});

  const { id } = useParams();
  // const productId=


  useEffect(()=>{
      getOrderItems();

  },[]);
  
  const getOrderItems= async()=>{
       const data=await getOrder(id);
      
       if(data){
        setOrders(data);
       }
       
  }
  

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(match.params.id));
  }, [dispatch, alert, error, match.params.id]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Order Details" />
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography component="h1">
                Order #{order && order?._id}
              </Typography>
              <Typography>Shipping Info</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p>Name:</p>
                  {/* <span>{order.user && order.user.name}</span> */}
                  <span>{userName && userName}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p>Address:</p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.state}`}
                  </span>
                </div>
              </div>
              <Typography>Payment</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                  </p>
                  <p style={{
                    color: "green"
                  }}>
                    PAID
                  </p>
                </div>

                <div>
                  <p>Amount:</p>
                  <span>₹ {order?.totalPrice && order?.totalPrice}</span>
                </div>
              </div>

              <Typography>Order Status</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order?.orderStatus && order?.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order?.orderStatus && order?.orderStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="orderDetailsCartItems">
              <Typography>Order Items:</Typography>
              <div className="orderDetailsCartItemsContainer">

                {order.orderItems &&
                  order.orderItems?.map((item, index) => (
                    <div key={index}  >
                      <img src={item?.productImages[0].url} alt="Product" />
                      <Link to={`/product/${item.Offer}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} X ₹{item?.productPrice} ={" "}
                        <b>₹{item.productPrice * item.quantity}</b>
                      </span>
                    </div>
                  ))}


              </div>
            </div>
          </div>
        </>
      )}
      <BottomTab />
    </>
  );
};

export default MyOrderDetails;