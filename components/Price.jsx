
const Price = ({price, options, id}) => {
  return (
      <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">${price.toFixed(2)}</h2>
          {/* Options container */}
          <div className="flex gap-4">
              {
                  options.map((option) => (
                      <button className="p-2 ring-1 ring-blue-500 rounded-md" key={option.title}>{option.title}</button>
                  ))
              }
          </div>
          {/* Quantity and add button container */}
          <div className="flex justify-between items-center">
              <div className="flex justify-between w-full ring-1 ring-blue-500 p-3">
                  <span>Quantity</span>
                  <div className="flex gap-4 items-center">
                      <button>{"<"}</button>
                      <span>1</span>
                      <button>{">"}</button>
                  </div>
              </div>
              <button className="uppercase p-3 bg-blue-500 text-white ring-1 ring-blue-500 w-56">Add to cart</button>
          </div>
    </div>
  )
}

export default Price