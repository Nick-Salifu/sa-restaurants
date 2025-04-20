import { menu } from '@/data'
import Link from 'next/link'
import React from 'react'

const MenuPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 flex flex-col gap-3 md:flex-row items-center h-[calc(100vh-6rem)] md:h-[(calc(100vh-9rem)]'>
      {
        menu.map((category) => (
          <Link href={`/menu/${category.slug}`} key={category.id} style={{backgroundImage: `url(${category.img})`}} className='w-full h-1/3 bg-cover p-6 md:h-1/2'>
            <div className={`text-${category.color} w-1/2`}>
              <h1 className='uppercase font-bold text-2xl'>{category.title}</h1>
              <p className='text-sm my-6'>{category.desc}</p>
              <button className={`hidden xl:block bg-${category.color} text-${category.color === "black" ? "white" : "blue-500"} py-2 px-4 rounded-md`}>Explore</button>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default MenuPage