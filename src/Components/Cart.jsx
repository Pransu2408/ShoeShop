import React, { useEffect, useState } from 'react'
import '../Styles/cart.css'
import dogpic from './baby-puppy-dog-in-big-shoes-png-transparent-image-3eoKzW.png'

const Cart = ({cart,setCart}) => {

  const [price,setPrice] = useState(0);

  const removeItem = (id) =>{

      const update = cart.filter(item => item.id !== id);

      setCart(update);
  };

  useEffect(() =>{

    const tot = cart.reduce((acc,item) => acc + item.price, 0);
    setPrice(tot);
  },[cart]);

  return (
    <div>{
      cart?.map((item) => (
        <div className='cart_box' key={item.id}>
          <div className='cart_img'>
            <img alt='shoe' className='theimg' src={item.img}></img>
          </div>
          <div className='deets'>
            <p className='itemtit'>{item.title}</p>
            <span className='itemprice'>MRP : &#x20B9; {item.price}</span>
            </div>
            <button className='button-17' onClick={()=>removeItem(item.id)}>Remove</button>
          <div>


          </div>
        </div>
))
}
{cart.length === 0 && (
  <div>
  <img className='dogpic' src={dogpic} alt='dog-pic'></img>
  <p className='emptyCart'>Oops! no items present in the cart</p>
  </div>
)}
{cart.length !== 0 && (
<div className='lastly'>
<hr className='f'></hr>
  <p className='summ'>Summary</p>
  <p className='tott'>Total = &#x20B9; {price}</p>
  <button class="button-27" >Proceed To Checkout</button>
</div>)}
</div>
  )
}

export default Cart