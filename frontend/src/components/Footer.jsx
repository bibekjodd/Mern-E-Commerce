import React from 'react'
import { FaSlackHash, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='grid grid-cols-1 mt-auto md:grid-cols-2 px-4 md:px-10 py-7  bg-neutral-200/30 space-y-10 md:space-y-0 md:space-x-20'>

            <div className='text-gray-600 sm:text-lg'>
                <FaSlackHash className='text-5xl mb-2' />
                <p>MERN E-Commerce</p>
                <p>Providing Best Quality Products Since 2000</p>
            </div>



            <div className='text-gray-600'>
                <h4 className='font-bold mb-2'>SOCIAL</h4>

                <div className='flex space-x-4 text-2xl '>
                    <a href='https://www.facebook.com/bibekbhattaraionline'
                        target='blank' rel="noopener noreferrer">
                        <FaFacebook />
                    </a>

                    <a href='https://www.instagram.com/bibek.js/'
                        target='blank' rel="noopener noreferrer">
                        <FaInstagram />
                    </a>

                    <a href='https://github.com/bibekjodd'
                        target='blank' rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>
            </div>



        </footer>
    )
}

export default Footer