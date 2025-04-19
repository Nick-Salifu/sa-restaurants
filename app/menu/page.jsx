import { menu } from '@/data'
import Link from 'next/link'
import React from 'react'

const MenuPage = () => {
  return (
    <div className='p-4 lg:p-20 xl:p-40 flex flex-col gap-3 md:flex-row items-center h-[calc(100vh-6rem)] md:h-[(calc(100vh-9rem)]'>
      {
        menu.map((category) => (
          <Link href={category.slug} key={category.id} style={{backgroundImage: `url(${category.img})`}} className='w-full h-[40%] bg-cover'>
            <div className={`text-${category.color} w-1/2`}>
              <h1 className='uppercase font-bold text-3xl'>{category.title}</h1>
              <p className='text-sm my-6'>{category.desc}</p>
              <button>Explore</button>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default MenuPage