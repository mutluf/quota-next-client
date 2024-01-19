"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './navbar.module.css'
import Paper from '/public/paper.jpg'
import Logo from '/public/logo.png'
import Image from 'next/image'
import Yasar from '../../../public/yasar-kemal.jpg'
import OpenedLetter from '../../../public/openedletter.png'
import ClosedLetter from '../../../public/closedletter.png'
import { Badge, Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import FontToggle from '../fontToggle/FontToggle'
import {handleLogout} from '@/lib/action'

const Navbar = () => {
  const router = useRouter()
  const [letter, setLetter] = useState(ClosedLetter);
  const [content, setContent] = useState(9);

  return (
    <div className={styles.container}>
      <Image className={styles.img} src={Paper} 
      alt="paper" 
      fill
      ></Image>
      <div className={styles.logo}>
        <Link href="/">
        <Image className={styles.logoimg} src={Logo} alt="logo"></Image>
        </Link>
      
      <Link className={styles.logotext} href="/">
        Quotta
      </Link>
      </div>
      
      <div className={styles.features}>
        <form action={handleLogout}>

        <button className={styles.buttonLog}>Çıkış Yap</button>
        </form>
        <button className={styles.buttonLog}>Giriş Yap</button>
        {/* //LINKS */}       
        <div className={styles.fontToggle}>
          <FontToggle/>
        </div>
        {/* MESSAGE */}
        <div className={styles.message}>
          {letter === ClosedLetter ? (
            <Badge className={styles.badge} 
            content={content}
            color="danger" 
            size='lg'
            showOutline={true}
            isInvisible={true}>
            <Button className={styles.button}
            onClick={()=>{setLetter(OpenedLetter)
            router.push('/messages')
            }}
            disableAnimation={true}>
              <Image className={styles.letter} src={letter} alt="letter"width={28} height={28}/>
              <div className={styles.messageText}>Mesajlar</div>
            </Button>
            </Badge>
          ):
          (
            <Button className={styles.button}
            onClick={()=>{setLetter(ClosedLetter)
            setContent(0);
            }}           
            disableAnimation={true}>
              <Image className={styles.letter} src={letter} alt="letter" width={28} height={28}/>
              <div className={styles.messageText}>Mesajlar</div>
            </Button>
          )}             
        </div>
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
