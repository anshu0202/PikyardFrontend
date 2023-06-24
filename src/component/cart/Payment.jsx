import React, { useEffect, useRef, useState } from "react";
import CheckoutSteps from "./CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../more/Metadata";
import { Typography } from "@material-ui/core";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import "./payment.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { createOrder, clearErrors } from "../../actions/OrderAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../more/Loader";
import { getCartItems } from "../../service/cartApi";

const Payment = ({ history }) => {
  const orderInfo = JSON.parse(localStorage.getItem("orderInfo"));

  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error, loading } = useSelector((state) => state.order);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };
    

  const [cartItem, setCartItems] = useState([])


  let cartItems2 = JSON.parse(localStorage.getItem('cartItems'));

  useEffect(() => {
    getCartItem();
  }, []);

  const getCartItem = async () => {
    // const data = await getCartItems();
    
    
    const data= cartItems2;
    // console.log("data  ",cartItems2);

    if (data) {
      setCartItems(data);
    }

  }

  const order = {
    shippingInfo,
    orderItems: cartItems2,
    itemsPrice: orderInfo.subtotal,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },

      };

      // console.log("toke s ",loca)


      const { data } = await axios.post(
        "/api/v2/payment/process",
        paymentData,
        config
      );

      const client_secret = data.client_secret;



      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              country: shippingInfo.country,
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;

        toast.error(result.error.message);
      } else {

        if (result.paymentIntent.status === "succeeded") {

         

          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };
            
          dispatch(createOrder(order));
          // console.log(order);

          history.push("/success");
        } else {
          toast.error("There's some issue while processing payment ");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      toast.error(error.response.data.message);
    }
  };

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //     dispatch(clearErrors());
  //   }
  // }, [dispatch, error, toast]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Payment" />
          <CheckoutSteps activeStep={2} />
          <div className="paymentContainer">
            <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
              <Typography>Card Info</Typography>
              <div>
                <CreditCardIcon />
                <CardNumberElement className="paymentInput" />
              </div>
              <div>
                <EventIcon />
                <CardExpiryElement className="paymentInput" />
              </div>
              <div>
                <VpnKeyIcon />
                <CardCvcElement className="paymentInput" />
              </div>

              <input
                type="submit"
                value={`Pay - ₹ ${orderInfo && orderInfo.totalPrice}`}
                ref={payBtn}
                className="paymentFormBtn"
              />
            </form>
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
        </>
      )}
    </>
  );
};

export default Payment;