import React  from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';





const ProductList = ({product}) => {

    const{title,brand,rating,thumbnail}=product;
// const dispatch=useDispatch()

  return (
    <div className='border-0 my-2 mb-20 flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg hover:scale-105 duration-300 p-2' >
       <div > 
        <img src={thumbnail} alt='product-pic' className='h-48 rounded-lg mx-auto'/>
       
        </div>
       
        <div className='mt-4'>
        <h1 className='font-bold'>{title}</h1>
         <p>{brand} </p>
         <p className='font-[poppins] bg-yellow-400 border-2 w-20 inline-block'>⭐{rating}</p>
         {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{dispatch(addItem(product))}}> 
 Add Cart
</button> */}
        </div>
       

    </div>
  )
}

export default ProductList