import React  from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addItem } from '../features/cartSlice'
import useProduct from '../Hooks/useProduct'
import Shimmer from './Shimmer'

const ProductInfo = () => {

const {pId}=useParams()
const productInfo=useProduct(pId);
const dispatch=useDispatch()


const navigate=useNavigate();
const handleClick=()=>{
  navigate('/Cart')
}
const truncate=(n,str)=>{
  return str.length>n?str.substring(0,75)+'....':str;
}


if(productInfo===null) return <Shimmer/>
const {brand,category,description,title,thumbnail,price,stock}=productInfo


  return (
    <div className='bg-red-500 flex justify-evenly items-center absolute  mx-auto left-0 right-0 p-4 h-screen'>
    <div >
      <img src={thumbnail} alt='product-pic' width={500} className='rounded-xl'/>
    </div>
    <div className='flex flex-col justify-evenly gap-4'>
    <h1 className='text-xl font-semibold'>{brand}<span className='ml-1'>{category}</span></h1>
   
    <h1 className='font-bold text-3xl'>{title}</h1>
    <h3 className='text-sm' >{truncate(50,description)}</h3>
   <div className='flex justify-between items-center'>
    <h1>{stock===0?'Out of stock':
    <button className='bg-black hover:bg-opacity-75  text-white font-bold py-1 px-4 border border-blue-700 rounded-lg'
    onClick={handleClick}
    >Buy Now</button>}</h1>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg" onClick={()=>{dispatch(addItem(productInfo))}}> 
 Add Cart
</button>
</div>
<h1 className='text-lg font-medium font-[Poppins]'>₹ {price*100}.00</h1>

    </div>
    </div>
  )
}

export default ProductInfo