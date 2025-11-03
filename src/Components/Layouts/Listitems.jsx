import React from 'react'

const Listitems = ({list, className}) => {
  return (
<li className={`font-Anek font-semibold text-[24px] text-white cursor-pointer ${className}`}>{list}</li>
  )
}

export default Listitems
