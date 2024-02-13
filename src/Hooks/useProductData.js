import React, { useEffect, useState } from 'react'

const useProductData = () => {

    const[productsData,setProductsData]=useState([])

    useEffect(()=>{
        fetchProducts();
    },[])

const fetchProducts=async()=>{
    const data=await fetch('https://dummyjson.com/products');
    const json=await data.json();
    setProductsData(json.products)
    // console.log(json.products);
    
}

return productsData;
}

export default useProductData