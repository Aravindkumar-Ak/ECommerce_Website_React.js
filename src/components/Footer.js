import React from 'react'

const Footer = () => {
  return (
    <div className='bg-purple-400 flex justify-between items-center  fixed bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 '>
     
        <span>&copy;<span className='font-bold'>Created by Aravindkumar</span></span>
        
        <ul className='flex '>
            <li>About</li>
            <li>Career</li>
            <li>Agreements</li>
        </ul>
    </div>
  )
}

export default Footer