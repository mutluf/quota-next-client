import Image from 'next/image'
import React from 'react'
import Paper from '../../../../public/quote-paper.jpg'
const Quote = () => {
  return (
    <div>
      <Image src={Paper} alt='' fill/>
    </div>
  )
}

export default Quote
