import React, {  useContext, useState } from 'react'
import pic from "../Assets/logo.jpg"
import {FaBars,FaTimes} from "react-icons/fa"
import { FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ThemeContext } from '../ThemeContext'



const Navbar = () => {

    const [nav,setNav]=useState(false);
    const handleClick=()=>{
        setNav((prev)=>!prev)
    }

const {theme,toggleTheme}=useContext(ThemeContext)

    // to show total quantity in cart
   const {cartItems}=useSelector((store)=>store.cart)

   let getTotalQuantity=()=>{
    let total=0;
    cartItems.forEach((item)=>
    total+=item.quantity
    )
    return total;
   }
  return (
    <div className='fixed w-full max-h-20 h-[90px] bg-black flex justify-between items-center px-4 text-white z-50'>
        <div className='flex items-center '>
        <Link to="/"> <img src={pic} alt='logo' style={{width:50}} className="rounded-lg shadow-xl"/></Link> 
        <p className='ml-4 font-[poppins] font-bold'>Shopify</p>
       
        
        </div>
        <div>
            <ul className='hidden md:flex '>
              
              <Link to="/Cart">  <li className='relative'> <FaShoppingBag  className='text-5xl text-violet-400'/><span className='absolute top-5 right-[31px] text-black text-xl font-bold' >{getTotalQuantity()||0}</span></li></Link> 
            </ul>
            {/* list */}
        </div>
<div onClick={handleClick} className='md:hidden z-10'>
    {!nav?
    <FaBars/>:<FaTimes/>}
    {/* hamburger */}
</div>
{/* mobile view */}
<ul className={!nav?'hidden':'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center md:hidden'}>

<li className='py-4 text-lg'>Cart</li>
</ul>



    </div>
  )
}

export default Navbar