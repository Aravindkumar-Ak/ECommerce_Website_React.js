import React from 'react'
import {FaChevronUp,FaChevronDown} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { decreaseItem, increaseItem, removeItem } from '../features/cartSlice'

const CartDetails = ({title,price,thumbnail,id,quantity=0}) => {

    const {cartItems}=useSelector((store)=>store.cart)
    const dispatch=useDispatch()
   return (
    
     <div className='flex justify-around items-center mt-8 border-b-2 border-green-500 p-4 m-4 bg-blue-400 rounded-lg '>

    <img src={thumbnail} alt={title} width={175} className='rounded-md'/>
    <div>
        <p>{title}</p>
        <p className='font-[poppins]'>${price*100}</p>
        <button className='border-2 border-red-500 px-2 py-1 font-semibold m-2' onClick={()=>{dispatch(removeItem(id))}}>Remove</button>
    </div>
<div>
    <button onClick={()=>{
       dispatch(increaseItem({id}))
        }}><FaChevronUp/></button>
    <p>{quantity}</p>
    <button onClick={()=>{
        dispatch(decreaseItem({id}))
        }}><FaChevronDown/></button>
</div>

       
    </div>
  

     )
}

export default CartDetails