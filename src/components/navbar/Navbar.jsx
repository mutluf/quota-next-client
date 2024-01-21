import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import Paper from '/public/paper.jpg'
import Logo from '/public/logo.png'
import Image from 'next/image'
import Links from '@/components/links/Links'
import { auth } from '@/lib/auth'

const Navbar = async () => {
  const session = await auth();
  // console.log(session);
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
      <Links session={session}/>
    </div>   
  )
}

export default Navbar
