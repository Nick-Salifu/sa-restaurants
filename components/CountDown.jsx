"use client";

const endingDate = new Date("2025-7-20")

import Countdown from "react-countdown";

const CountDown = () => {
  return (
      <div>
          <Countdown date={endingDate} className="text-5xl font-bold text-yellow-300" />
    </div>
  )
}

export default CountDown