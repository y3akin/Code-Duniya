import React from 'react'

const Descrip = ({title_p, className}) => {
  return (
    <>
      <p className={`font-Anek font-medium w-[320px] mx-auto sm:w-auto text-[17px] sm:text-[20px] text-black mt-5 ${className}`}>{title_p}</p>
    </>
  )
}

export default Descrip
