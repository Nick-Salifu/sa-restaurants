import { featuredProducts } from "@/data"
import Image from "next/image"

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-blue-500">
      <div className="w-max flex">
        {
          featuredProducts.map((item) => (
            <div key={item.id} className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-gray-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[80vh]">
              <div className="flex-1 hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="dumplings image" height={200} width={200} className="object-contain rounded-full" />
              </div>

              <div className="flex-1 flex flex-col gap-4 items-center justify-center text-center">
                <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
                <p className="p-4 2xl:p-8">{item.desc}</p>
                <span className="text-xl font-bold">${item.price}</span>
                <button className="bg-blue-500 text-white p-2 rounded-md">Add to cart</button>
              </div>
          </div>
          ))
        }
      </div>
    </div>
  )
} 

export default Featured