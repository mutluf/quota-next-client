import Image from 'next/image'
import React from 'react'
import Paper from '../../../../public/quote-paper.jpg'
import styles from './quote.module.css'
import { Avatar } from '@nextui-org/react'
import Link from 'next/link'

const Quote = () => {
  return (
    <div className={styles.container}>
       <div className={styles.avatar}>
           <Link href='/users'>

             <Avatar 
            radius='full'
             size='md'
             alt=''
             src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
             </Link>
         </div>
  <div className={styles.hero_image}>
    <Image className={styles.img} src={Paper} alt='paper' 
    priority
    />
  </div>
  <div className={styles.hero_text}> 
    <h2>Hero Text</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate vnt, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Add more content here and see the image height grows...</p>
    <br/>
    <p className={styles.username}>
       Johan Narcissus
       </p>
  </div>
  
</div>
   
  )
}

export default Quote
