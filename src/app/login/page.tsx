"use client"
import React from 'react'
import styles from './page.module.css'
import { Input } from '@nextui-org/react'
import Image from 'next/image'
import Google from '../../../public/google.png'
import Github from '../../../public/github.png'

const LoginPage = () => {


  return (
    <div className={styles.container}>
      <div className={styles.login}>      
      Giriş
      </div>
      <div className={styles.form}>
        <div className={styles.input}>
            <Input className="max-w-xs"
            placeholder='Kullanıcı adı'
            radius='full'
            size='lg'
            required/>
        </div>
        <div className={styles.input}>

        <Input className={styles.inputt} placeholder='Şifre'
        type='text'
        variant='bordered'
        radius='lg'
        color='secondary'
        size='lg'
        required/>
        </div>
        <div className={styles.button}>
          <button onClick={()=>{alert('Giriş Başarılı!')}}>
            Giriş Yap
          </button>
        </div>
      </div>
      <div className={styles.external}>
        <div >
        <button className={styles.externalButton}>
          <Image src={Google} alt='' width={20} height={20}/>
          Google ile giriş yap</button>
        </div>
        <div >
          <button className={styles.externalButton}>
          <Image src={Github} alt='' width={20} height={20}/>
          Github ile giriş yap</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
