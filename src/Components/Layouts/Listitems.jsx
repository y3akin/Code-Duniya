import React from 'react'

const Listitems = ({list, className, onClick}) => {
  return (
<li onClick={onClick} className={`font-Anek font-semibold text-[24px] text-white cursor-pointer hover:text-[#778DA9] ${className}`}>{list}</li>
  )
}

export default Listitems
