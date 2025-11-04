import React from 'react'

const Descrip = ({title_p, className}) => {
  return (
    <>
      <p className={`font-Anek font-medium text-[20px] text-black mt-5 ${className}`}>{title_p}</p>
    </>
  )
}

export default Descrip
