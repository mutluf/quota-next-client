"use client"
import React, { useState } from 'react'
import styles from './post.module.css'
import { Button, Divider, Textarea } from '@nextui-org/react'
import Image from 'next/image'
import Bird from '../../../../public/logo.png'
const page = () => {

  const [content, setContent]= useState("");
  
  return (
    <div className={styles.container}>
        <br/>
        <br/>
        <br/>
        <Divider/>

      <div className={styles.content}>
        <div className={styles.wrapper}>           
          <div className={styles.text}>
            <Textarea  
            type="text" 
            fullWidth= {true}
            value={content}
            placeholder="Metin giriniz..."
            variant='faded'
            size='lg'
            minRows={5}
            maxRows={10}
            onValueChange={(prev)=>{
                setContent(prev)}}
          />
        </div>

        <div className={styles.button}>               
          <Button onClick={()=>{}}>
            Paylaş                   
            <Image className={styles.img} src={Bird} alt=''/>                                        
          </Button>               
        </div>
        </div>
      </div>
      <Divider/>
    </div>
  )
}

export default page
