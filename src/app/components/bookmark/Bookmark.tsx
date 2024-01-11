"use client"
import React from 'react'
import styles from './bookmark.module.css'
import Quote from '../quote/Quote'
import { Divider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const Bookmark = () => {
  const router = useRouter();
  const id = 1;
  const link = `/quotes/${id}`

  return (
  <div className={styles.container}>
   <div className={styles.title}>Kaydedilenler</div>
   <Divider/>
    <div className={styles.wrapper}> 
        
      <div className={styles.box} onClick={()=>{router.push(link)}}>
        <Quote/>
      </div>
   
      <div className={styles.box} onClick={()=>{router.push(link)}}>
        <Quote/>
      </div>

      <div className={styles.box} onClick={()=>{router.push(link)}}>
        <Quote/>
      </div>
  
    </div>
  </div>
  )
}

export default Bookmark
