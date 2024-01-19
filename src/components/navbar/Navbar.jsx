import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import Paper from '/public/paper.jpg'
import Logo from '/public/logo.png'
import Image from 'next/image'
import Links from '@/components/links/Links'

const Navbar = () => {

  return (
    <div className={styles.container}>
      <Image className={styles.img} src={Paper} 
      alt="paper" 
      fill
      />
      <div className={styles.logo}>
        <Link href="/">
          <Image className={styles.logoimg} src={Logo} alt="logo"/>
        </Link>
      
        <Link className={styles.logotext} href="/">
          Quotta
        </Link>
      </div>     
      <Links/>
    </div>   
  )
}

export default Navbar
