import React from 'react'
import { AiFillStar } from 'react-icons/ai'


function Product() {
    return (
        <div className=' bg-white m-3 pb-5 px-3 rounded-md shadow-xl shadow-gray-200/50 text-gray-700 font-semibold'>
            <img
                className='h-60 mx-auto object-contain'
                src="https://amazon-clone-x.vercel.app/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F71li-ujtlUL._AC_UX679_.jpg&w=640&q=75" alt="" />
            <h5 className='text-xl my-1'>Amber Jacket</h5>
            <div className='flex items-center my-1'>
                <AiFillStar className='text-orange-400' />
                <AiFillStar className='text-orange-400' />
                <AiFillStar className='text-orange-400' />
                <AiFillStar className='text-orange-400' />
                <span className='ml-2 text-sm text-gray-500'>(256 Reviews)</span>
            </div>
            <h6 className='text-orange-500'>$200</h6>
        </div>
    )
}

export default Product