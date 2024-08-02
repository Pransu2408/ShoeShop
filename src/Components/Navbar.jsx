
import React from 'react'
import '../Styles/navbar.css'
import logo from './sheep-svgrepo-com.svg'
import cartpic from './shopping-cart-outline-svgrepo-com.svg'
import '../Styles/font.css'

const Navbar = ({size, setScreen}) => {
  return (
    <nav>
    <div className='nav_box'>
      <img className='sheepy' src={logo} onClick={() => setScreen(true)} />
      <span style={{fontFamily: 'Quant'}} className='myshop' onClick={() => setScreen(true)}>
        Black Sheep Kicks
      </span>
      <div className='cart' onClick={() => setScreen(false)}>
        <span>
        <img className='cartlogo' src={cartpic} onClick={() => setScreen(true)} />
        </span>
        <span className='noOfItems'>{size}</span>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
