import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-blue-500 lg:flex-row'>
      {/* products container */}
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:overflow-hidden lg:h-full lg:w-2/3 xl:w-1/2 lg:px-20 xl:px-40'>
        <div className='flex justify-between items-center mb-4'>
          <Image src="/images/burger.jpg" alt='burger image' width={100} height={100} className='rounded-full' />
          <div>
            <h1 className='text-xl font-bold uppercase'>Burger</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$21.9</h2>
          <span className='cursor-pointer'>X</span>
        </div>

        <div className='flex justify-between items-center mb-4'>
          <Image src="/images/burger.jpg" alt='burger image' width={100} height={100} className='rounded-full' />
          <div>
            <h1 className='text-xl font-bold uppercase'>Burger</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$21.9</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        
        <div className='flex justify-between items-center mb-4'>
          <Image src="/images/burger.jpg" alt='burger image' width={100} height={100} className='rounded-full' />
          <div>
            <h1 className='text-xl font-bold uppercase'>Burger</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$21.9</h2>
          <span className='cursor-pointer'>X</span>
        </div>
      </div>
      {/* payment container */}
      <div className='h-1/2 p-4 bg-gray-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 xl:w-1/2 lg:px-20 xl:px-40 xl:text-xl'>
        <div className='flex justify-between'>
          <span className=''>Subtotal (3 items)</span>
          <span className=''>$51.0</span>
        </div>
        <div className='flex justify-between'>
          <span className=''>Service cost</span>
          <span className=''>$0.00</span>
        </div>
        <div className='flex justify-between'>
          <span className=''>Delivery cost</span>
          <span className='text-green-500'>FREE</span>
        </div>
        <hr className='my-2'/>
        <div className='flex justify-between'>
          <span className=''>TOTAL (Inc VAT)</span>
          <span className='font-bold'>$86.0</span>
        </div>
        <button className='bg-blue-500 text-white p-3 rounded-md self-end'>CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartPage