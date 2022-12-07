import React from 'react'
import Product from './Product'

function Products() {
    return (
        <div className='py-4 px-4 '>


            <h4 className='text-2xl text-center text-gray-700 mb-3'>
                Featured Products
            </h4>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>


        </div>
    )
}

export default Products