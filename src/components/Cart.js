import React  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cartSlice';
import { Cart_URL } from '../Utilis/constants';
import CartDetails from './CartDetails';




const Cart = () => {
  const dispatch=useDispatch()
const Items=useSelector((store)=>store.cart.cartItems)

let total=()=>{
  let totalQuantity=0
  let totalPrice=0
  Items.forEach((item)=>
  {totalQuantity+=item.quantity
  totalPrice+=item.price*item.quantity}
  )
  return {totalQuantity,totalPrice}
}


return (
   
<>
{Items.length >0?
    <div className='absolute top-[11%] mx-auto left-0 right-0 bg-violet-500 py-12 h-screen' >
      <h1 className='text-2xl font-semibold text-black'>Cart List</h1>
 
      {Items.map((item)=>
{
  
  return <CartDetails {...item} key={item.id} />
}
      
      )}
       <footer>

    <hr/>
    <div className='flex justify-between items-center px-[200px] my-3'>
    <p className='text-lg text-white font-bold'>Total</p>
    <p className='text-lg text-white font-bold font-[poppins]'>$ {total().totalPrice*100}</p>
    </div>
    <button  className='border-2 border-red-500 px-2 py-1 font-semibold m-2 shadow-lg' onClick={()=>{dispatch(clearCart())}}>Clear cart</button>
</footer>
     
    </div>:
    <div className='absolute top-[11%] mx-auto left-0 right-0 '>
      <p className='pt-12 font-bold text-4xl text-center'>Your Cart is Empty</p>
      <img 
      src={Cart_URL}
      alt='cart' className='w-[450px] mx-auto left-0 right-0'/>
      </div>
    }
    </>
  )
}

export default Cart;