import React, { useEffect, useState } from 'react'

const useProduct = (pId) => {
    const[productInfo,setProductInfo]=useState(null)
    useEffect(()=>{
        fetchData()
        },[])
        
        
        const fetchData=async()=>{
          const data=await fetch('https://dummyjson.com/products/'+pId)
          const json=await data.json();
          setProductInfo(json)
          console.log(json);
          console.log(pId);
        
        }
  return productInfo;
   
  
}

export default useProduct