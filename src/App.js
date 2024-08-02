import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";

const App = () => {

  const[cart,setCart] = useState([]);
  // const[warning,setWarning] = useState(false);
  const[screen,setScreen] = useState(true);

  const handleClick = (item) => {
      let isPresent = false;
      cart.forEach((product)=>{
        if(item.id === product.id)
          isPresent = true;
      })
      // if(isPresent){
      //   setWarning(true);
      //   setTimeout(()=>{
      //     setWarning(false);
      //   },2000)
      //   return;
      // }
      setCart([...cart,item]);
  }

  return (<div>
    <Navbar setScreen={setScreen} size={cart.length} />
    { screen ? <Shop handleClick={handleClick} /> : <Cart cart = {cart} setCart ={setCart} ></Cart> }

    
  </div>);
};

export default App;
