import Image from "next/image"
import CountDown from "./CountDown"

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between">
      {/* Text container */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">Delicious Burger & French Fry</h1>
        <p className="text-white xl:text-xl">Progressively simplified effective e-toiler and process centric methods of empowerment. Quickly pontificate parallel</p>
        <CountDown />
        <button className="bg-blue-500 text-white py-3 px-6">Order Now</button>
      </div>

      {/* Image container */}
      <div className="flex-1 relative w-full md:h-full">
        <Image src="/images/burger.jpg" alt="burger image" fill className="object-contain" />
      </div>
    </div>
  )
}

export default Offer