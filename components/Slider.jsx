"use client";

import Image from "next/image"
import { useEffect, useState } from "react"

const data = [
  {
    id: 1,
    title: "Always fresh & always tasty & always crispy",
    image: "/images/pwoman.jpg"
  },
  {
    id: 2,
    title: "We deliver your order wherever you are in Nigeria",
    image: "/images/bman.jpg"
  },
  {
    id: 1,
    title: "The best pizza to share with your family",
    image: "/images/family.jpg"
  },
]


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)), 2000
    )

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-gray-50">
      {/* Text container */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 text-blue-500 font-bold">
        <h1 className="text-4xl text-center p-4 md:p-10 uppercase md:text-5xl xl:text-6xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-blue-500 text-white py-4 px-8">Order now</button>
      </div>

      {/* Image container */}
      <div className="flex-1 w-full relative">
        <Image src={data[currentSlide].image} alt="" fill className="object-cover"/>
      </div>
    </div>
  )
}

export default Slider