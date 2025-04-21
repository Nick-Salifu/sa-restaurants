import Price from '@/components/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'

const SingleProductPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-blue-500 md:flex-row md:gap-8 md:items-center'>
      {/* Image container */}
      <div className='w-full h-1/2 md:h-[70%]'>
        <Image src={singleProduct.img} alt="products image" height={270} width={270} className="object-contain rounded-full" />
        {/* <Image src={singleProduct.img} alt="products image" height={200} width={200} className="object-contain rounded-full md:hidden" /> */}
      </div>

      {/* Text container */}
      <div className=' flex flex-col gap-4 h-1/2 md:h-[70%] md:gap-6 xl:gap-8 md:justify-center'>
        <h1 className='text-3xl font-bold uppercase xl:text-5xl'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />
      </div>
    </div>
  )
}

export default SingleProductPage