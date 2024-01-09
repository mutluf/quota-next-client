"use client"
import React from 'react'
import styles from './createbutton.module.css'
import {Button} from "@nextui-org/react";
import Image from 'next/image'
import Pen from '../../../../public/pen.png'
import { useRouter } from 'next/navigation';

const CreateButton = () => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      
      <Button className={styles.button} onClick={() => router.push('/quotes/post')}>
        <Image className={styles.img} src={Pen} alt="pen"/>  
      </Button>
      
    </div>
  )
}

export default CreateButton
