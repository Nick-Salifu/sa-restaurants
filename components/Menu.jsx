"use client";

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const links = [
    {id: 1, title: "Home", url: "/"},
    {id: 2, title: "Menu", url: "/menu"},
    {id: 3, title: "Working hours", url: "/"},
    {id: 4, title: "Contact", url: "/"},
]

const Menu = () => {
    const [open, setOpen] = useState(false)

  return (
      <div>
          {!open ?
              <Image src="/images/menubar.png" alt='open menu' height={25} width={25} onClick={() => setOpen(true)} /> :
              <Image src="/images/closemenu.png" alt='close menu' height={25} width={25} onClick={() => setOpen(false)} />
          }
          
          <div className='bg-blue-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-2xl gap-8 z-10'>
            {links.map(item => (
                <Link href={item.url} key={item.id}>{item.title}</Link>
            ))}
          </div>
    </div>
  )
}

export default Menu