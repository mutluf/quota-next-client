import React from 'react'
import styles from './bookmark.module.css'
import Quote from '../quote/Quote'
import { Divider } from '@nextui-org/react'
import Link from 'next/link'
const Bookmark = () => {
    const id = 1;
    const link = `/quotes/${id}`
  return (
  <div className={styles.container}>
   <div className={styles.title}>Kaydedilenler</div>
   <Divider/>
    <div className={styles.wrapper}>
       <Link href={link}>
      <div className={styles.box}>
        <Quote/>
      </div>
       </Link>
      <div className={styles.box}>
      <Quote/>
      </div>
      <div className={styles.box}>
      <Quote/>
      </div>
    </div>
  </div>
  )
}

export default Bookmark
