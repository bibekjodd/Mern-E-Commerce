import React from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'


function Header() {
  const [nav, setNav] = useState(true);
  const navigate = useNavigate();

  const Nav = ({ className }) => {
    const location = useLocation();

    return (
      <nav
        className={className ? className : `${nav ? 'hidden' : 'flex absolute bg-neutral-100 left-0 z-10 pb-4 flex-col top-full w-full px-4'} md:hidden`}
      >
        <button
          onClick={() => {
            setNav(true)
            navigate('/')
          }}
          className={`hover:text-sky-600 px-2 py-1.5  hover:bg-neutral-200/60 rounded-md ${location.pathname === '/' ? 'text-sky-600' : ''}`}>
          Home
        </button>

        <button
          onClick={() => {
            setNav(true)
            navigate('/about')
          }}
          className={`hover:text-sky-600 px-2 py-1.5  hover:bg-neutral-200/60 rounded-md ${location.pathname === '/about' ? 'text-sky-600' : ''}`}>
          About
        </button>

        <button
          onClick={() => {
            setNav(true)
            navigate('/services')
          }}
          className={`hover:text-sky-600 px-2 py-1.5  hover:bg-neutral-200/60 rounded-md ${location.pathname === '/services' ? 'text-sky-600' : ''}`}>
          Services
        </button>

        <button
          onClick={() => {
            setNav(true)
            navigate('/contact')
          }}
          className={`hover:text-sky-600 px-2 py-1.5  hover:bg-neutral-200/60 rounded-md ${location.pathname === '/contact' ? 'text-sky-600' : ''}`}>
          Contact
        </button>
      </nav>

    )
  }

  return (
    <div className='sticky h-16 top-0 left-0 select-none z-10 backdrop-blur-xl bg-neutral-100/75 flex items-center px-4 md:px-10 shadow-md shadow-neutral-200/50 text-gray-700 '>
      <header className=' flex items-center h-fit  relative w-full' >

        <button
          className='md:hidden mr-3 text-xl text-neutral-600'
          onClick={() => { setNav(!nav) }}
        >
          <HiMenuAlt2 />
        </button>

        <Link to='/' className='text-xl font-semibold mr-5 gdText bg-gradient-to-br from-sky-500  to-fuchsia-400'>Mern Ecommerce</Link>


        <Nav />
        <Nav className='hidden md:flex ' />

        <div className='ml-auto'>
          <AiOutlineShoppingCart
            className='text-xl hover:bg-neutral-200/60 h-9 w-10 p-2 rounded-full' />
        </div>


      </header>
    </div>
  )
}

export default Header