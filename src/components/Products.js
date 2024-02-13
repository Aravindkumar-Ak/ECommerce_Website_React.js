import React, {  useContext, useEffect, useState }  from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import ProductList from './ProductList';
import Shimmer from './Shimmer';

const Products = () => {

const[searchText,setSearchText]=useState("");
const[filteredProducts,setFilteredProducts]=useState([])

const[productsData,setProductsData]=useState([])

const {theme,toggleTheme}=useContext(ThemeContext);

useEffect(()=>{
    fetchProducts();
},[])

const fetchProducts=async()=>{
const data=await fetch('https://dummyjson.com/products');
const json=await data.json();
setProductsData(json.products)
setFilteredProducts(json.products)
}



const handleSearch=()=>{
 const searchValue=productsData.filter((p)=>p.title.toLowerCase().includes(searchText.toLowerCase()))
setFilteredProducts(searchValue)
}

if(productsData.length===0) return <Shimmer/>
return (
  <div className='absolute top-20  flex flex-col'>
    <div className={`${theme==="dark" && "bg-slate-600"}`}>
       
        <div className='my-8 flex justify-center'>
          <input type='text' placeholder='search' value={searchText} className=' outline-0 h-[35px] w-[375px] px-2 font-bold rounded-md shadow-lg bg-slate-100 ' onChange={(e)=>setSearchText(e.target.value)}/>
          <button className='bg-black hover:bg-opacity-75  text-white font-semibold ml-4 py-1 px-4 border border-blue-700 rounded'
 onClick={handleSearch}
 >Search</button>
        </div>
        <div>
        <label className="relative inline-flex items-center cursor-pointer ">
  <input type="checkbox" value="" className="sr-only peer" onChange={toggleTheme} checked={theme==="light"}/>
  <div className="w-6 h-11 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-y-full rtl:peer-checked:after:-translate-y-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ms-3 text-sm font-medium text-gray-900">{theme==="light"?"🌞":"🌛"}</span>
</label>
        </div>
        <div className='grid grid-cols-5 gap-8 justify-center items-center'>
            
{
  filteredProducts.length===0?
  
    <h1 className='text-center text-xl font-extrabold'>Couldn't find Products</h1>
    :
   filteredProducts.map((product)=><li key={product.id} className="list-none">{
      <Link to={`/product/${product.id}`}> <ProductList product={product} /></Link>
    }</li>)
}

        </div>
    </div>
    </div>
  )
}

export default Products;