import React from 'react'
import styles from './user.module.css'
import Quote from '../quote/Quote'
import Yasar from '../../../../public/yasar-kemal.jpg'
import Yasar2 from '../../../../public/yasar-kemal-2.jpg'
import Yasar3 from '../../../../public/yasar-kemal-3.jpg'

import Image from 'next/image'
const User = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgs}>

        <div className={styles.img1}>
            <Image className={styles.profileimg1} src={Yasar2} alt=''/>
        </div>
        <div className={styles.img2}>
            <Image className={styles.profileimg2} src={Yasar} alt=''/>
        </div>
        <div className={styles.img3}>
            <Image className={styles.profileimg3} src={Yasar3} alt=''/>
        </div>
        </div>
        <div className={styles.content}>
        <div>
            <span className={styles.span}>@yasarkemal</span>
        </div>
        <div>
        Demir olsam çürürdüm, toprak oldum dayandım.
        </div>
        </div>
      </div>
      <div className={styles.quotes}>

      <Quote/>
      </div>
    </div>
  )
}

export default User
