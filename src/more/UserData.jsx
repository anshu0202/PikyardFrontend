import React, { useState, useEffect } from "react";
import "./UserOption.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Support from "@material-ui/icons/ReportProblem"
import HeartIcon from "@material-ui/icons/FavoriteBorder";
import HeartActiveIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import {addToCart,getCartItems } from "../service/cartApi";


const UserData = ({ user }) => {

  const { cartItems } = useSelector((state) => state.cart);
  const { favouriteItems } = useSelector((state) => state.favourite);


    const [itemList, setItemList]=useState(0);
    const cartItems2 = JSON.parse(localStorage.getItem('cartItems'));

    const userId=JSON.parse(localStorage.getItem("user"))?._id
    
    useEffect(async()=>{
      const userId=JSON.parse(localStorage.getItem("user"))?._id
   if(userId===undefined){
    return 
   }
   else{
    const data = JSON.parse(localStorage.getItem('cartItems'));
     if(data){
       setItemList(data?.length)
     }
   }

    },[cartItems2?.length]);





  const [open, setOpen] = useState(false);
  const history = useHistory();
  
  const scroolEffect = useRef(null);

  window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 100){
        document.querySelector(".speedDial")?.classList?.add("active");
    }
    else{
      document.querySelector(".speedDial")?.classList?.remove("active");
    }
  })

  const dispatch = useDispatch();

  const options = [
    { icon: <HomeIcon />, name: "Home", func: home },
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    {
      icon: (
        <ShoppingCartIcon
        style={{
         color: cartItems.length === 0 ? "" : "tomato",
        }}
        />
      ),
      // name: `Cart (${cartItems.length})`,
      name: `Cart (${itemList})`,
      func: cart,
    },
    {
      icon:
          <HeartIcon 
          style={{
            color: favouriteItems.length === 0 ? "" : "tomato",
           }}
          />,
      name:
      `Favourite (${favouriteItems.length})`,
      func: favourite,
    },
    { icon: <PersonIcon />, name: "Profile", func: account },
    { icon: <Support />, name: "Report us", func: report },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }
  if (user.role === "Creator") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    history.push("/dashboard");
  }
  function home() {
    history.push("/");
  }
  function orders() {
   
    history.push("/orders");
  }
  function cart() {
   
    history.push("/cart");
  }
  function favourite() {
    history.push("/favourites");
  }
  function account() {
    if(userId===undefined){
      toast.warn("Please login to see profile");
      return ;
    }
    history.push("/me");
  }

  function report() {
    history.push("/support");
  }

 async function logoutUser() {

    const cartItem = JSON.parse(localStorage.getItem('cartItems'));
      const addItems=await addToCart(cartItem);
      let newCart=[];
      const cart = JSON.stringify(newCart);
      localStorage.setItem('cartItems', cart);
    

    dispatch(logout());
     localStorage.removeItem('user');
     toast.success("Logout Successfully");
  }

  return (
    <>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        useRef={scroolEffect}
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : ("/profile.png")}
            alt="Profile"
            style={{
              position:"fixed"
            }}
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={false}
          />
        ))}
      </SpeedDial>
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
  );
};

export default UserData;
