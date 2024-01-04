import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import Paper from '/public/paper.jpg'
import Logo from '/public/logo.png'
import Image from 'next/image'
import { Avatar } from '@nextui-org/avatar'
import Yasar from '../../../../public/yasar-kemal.jpg'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.img} src={Paper} alt="" fill></Image>
      <div className={styles.logo}>
        <Link href="/">
        <Image className={styles.logoimg} src={Logo} alt=""></Image>
        </Link>
      
      <Link className={styles.logotext} href="/">
        Quotta
      </Link>
      </div>
      
      <div className={styles.features}>
        {/* //LINKS */}
        <div>
            links
        </div>
        {/* ICONS MAYBE */}
        <div>
           
            <div>
              <Link href='/users'>
            <Image  className={styles.avatar}
          radius='full'
          size='md'
          alt=''
          src={Yasar} />
          </Link>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default Navbar
