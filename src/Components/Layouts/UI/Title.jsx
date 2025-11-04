import React from 'react'

const Title = ({title_text, className}) => {
  return (
    <>
      <h1 className={`font-Anek font-bold text-[36px] text-black ${className}`}>{title_text}</h1>
    </>
  )
}

export default Title
