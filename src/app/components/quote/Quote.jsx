import Image from 'next/image'
import React from 'react'
import Paper from '../../../../public/quote-paper.jpg'
import styles from './quote.module.css'

const Quote = () => {
  return (
    <div className={styles.container}>
      <Image src={Paper} alt=''/>
    </div>
  )
}

export default Quote
