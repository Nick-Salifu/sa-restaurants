import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <nav className='h-12 text-blue-500 p-4 flex items-center justify-between border-b-2 border-b-blue-500 uppercase'>
      {/* Logo */}
      <div className='text-xl'>
        <Link href="/">SA-Food</Link>
      </div>

      {/* Mobile menu */}
      <div>
        <Menu />
      </div>
    </nav>
  )
}

export default Navbar