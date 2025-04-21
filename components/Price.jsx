"use client"

import { useEffect, useState } from "react"

const Price = ({price, options, id}) => {
    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        setTotal(quantity * (options ? price + options[selected].additionalPrice : price))
    }, [selected, quantity, options, price])

  return (
      <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
          {/* Options container */}
          <div className="flex gap-4">
              {
                  options.map((option, index) => (
                      <button
                          className="min-w-[6rem] p-2 ring-1 ring-blue-500 rounded-md"
                          key={option.title}
                          style={{
                              background: selected === index ? "rgb(33, 150, 243)" : "white",
                              color: selected === index ? "white" : "rgb(33, 150, 243)"
                          }}
                          onClick={() => setSelected(index)}
                      >
                          {option.title}
                      </button>
                  ))
              }
          </div>
          {/* Quantity and add button container */}
          <div className="flex justify-between items-center">
              <div className="flex justify-between w-full ring-1 ring-blue-500 p-3">
                  <span>Quantity</span>
                  <div className="flex gap-4 items-center">
                      <button
                          onClick={() => setQuantity((prev) => (prev > 1 ? prev-1 : 1))}>
                          {"<"}
                      </button>
                      <span>{quantity}</span>
                      <button
                          onClick={() => setQuantity((prev) => (prev < 9 ? prev+1 : 9))}>
                          {">"}
                      </button>
                  </div>
              </div>
              <button className="uppercase p-3 bg-blue-500 text-white ring-1 ring-blue-500 w-48">Add to cart</button>
          </div>
    </div>
  )
}

export default Price