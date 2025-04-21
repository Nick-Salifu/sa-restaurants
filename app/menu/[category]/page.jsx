import { pizzas } from "@/data"
import Image from "next/image"
import Link from "next/link"

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-blue-500">
      {
        pizzas.map((item) => (
          <Link className="w-full h-[60vh] border-r-2 border-b-2 p-8 border-blue-500 sm:w-1/2 lg:w-1/3 flex flex-col justify-between group even:bg-gray-50" href={`/products/${item.id}`} key={item.id}>
            <div className="h-[80%] w-full">
              <Image src={item.img} alt="products image" height={200} width={200} className="object-contain rounded-full" />
            </div>

            <div className="flex items-center justify-between font-bold">
              <h1 className="text-xl uppercase">{item.title}</h1>
              <h2 className="group-hover:hidden text-xl">${item.price}</h2>
              <button className="hidden group-hover:block bg-blue-500 text-white p-2 rounded-md uppercase">Add to cart</button>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default CategoryPage