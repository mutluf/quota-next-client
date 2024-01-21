"use client"
import React, { useState } from 'react'
import FontToggle from '../fontToggle/FontToggle'
import {handleLogout} from '@/lib/action'
import { Badge, Button } from '@nextui-org/react'
import Yasar from '../../../public/yasar-kemal.jpg'
import OpenedLetter from '../../../public/openedletter.png'
import styles from './link.module.css'
import ClosedLetter from '../../../public/closedletter.png'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const Links = ({session}) => {
    const router = useRouter()
    const [letter, setLetter] = useState(ClosedLetter);
    const [content, setContent] = useState(9);
    console.log(session);
  return (
    <div>
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

export default Links
