import Link from "next/link"

const Footer = () => {
  return (
    <div className="flex items-center justify-between h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-blue-500">
      <Link href="/" className="font-bold text-xl">SA-Food</Link>
      <p className="capitalize text-base">all right reserved</p>
    </div>
  )
}

export default Footer