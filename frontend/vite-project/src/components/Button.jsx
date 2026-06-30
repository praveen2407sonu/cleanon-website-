import React from 'react'

function Button() {
  return (
    <div className="relative inline-block">
  {/* Bottom Layer */}
  <div className="absolute left-1 top-1.5 w-full h-full bg-yellow-500 rounded-r-2xl"></div>

  {/* Main Button */}
  <button
    className="
      relative
      z-10
      bg-green-700
      text-white
      px-8
      py-3
      font-bold
      tracking-wide
      rounded-r-2xl
      transition-all
      hover:-translate-x-[2px]
      hover:-translate-y-[2px]
    "
  >
    Quick Hacks
  </button>
</div>
  )
}

export default Button
