import React from 'react'

const Listitems = ({list, className, onClick}) => {
  return (
<li onClick={onClick} className={`font-Anek font-semibold text-[24px] text-white px-2 hover:rounded-xl sm:hover:rounded-none sm:p-0 hover:bg-[#778DA9] sm:hover:bg-transparent sm:hover:text-[#778DA9] transition-all duration-300 cursor-pointer ${className}`}>{list}</li>
  )
}

export default Listitems
