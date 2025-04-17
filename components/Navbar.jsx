import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon';
import Image from 'next/image';

const Navbar = () => {
  const user = false;

  return (
    <nav className='h-12 text-blue-500 p-4 flex items-center justify-between border-b-2 border-b-blue-500 uppercase md:h-16 lg:px-20 xl:px-40'>
      {/* Left links */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* Logo */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href="/">SA-Food</Link>
      </div>

      {/* Mobile menu */}
      <div className='md:hidden'>
        <Menu />
      </div>

      {/* Right links */}
      <div className='hidden md:flex gap-4 flex-1 justify-end'>
        <div className='md:absolute top-3 right-2 lg:static flex items-center gap-2 bg-blue-500 text-white rounded-md px-1'>
          <Image src="/images/phone.png" alt='phone icon' width={20} height={20} />
          <span>234 8023 6034 15</span>
        </div>
        {!user ? <Link href="/">Login</Link> :
          <Link href="/order">Order</Link>
        }
        <CartIcon />
      </div>
    </nav>
  )
}

export default Navbar