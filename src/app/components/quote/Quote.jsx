import Image from 'next/image'
import React from 'react'
import Paper from '../../../../public/quote-paper.jpg'
import styles from './quote.module.css'
import { Avatar, Button } from '@nextui-org/react'
import Link from 'next/link'
// import UserAvatar from '../../../../public/yasar-kemal.jpg'

const Quote = () => {
  return (
    <div className={styles.container}>
       <div class={styles.avatar}>
           <Link href='/users'>

             <Avatar 
            radius='full'
             size='md'
             alt=''
             src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
             </Link>
         </div>
  <div className={styles.hero_image}>
    <Image className={styles.img} src={Paper}/>
  </div>
  <div className={styles.hero_text}> 
    <h2>Hero Text</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate vnt, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Add more content here and see the image height grows...</p>
    <br/>
    <p class={styles.username}>
       Johan Narcissus
       </p>
  </div>
  
</div>
    // <div className={styles.container}>
      
    //   <div className={styles.wrapper}>
    //     <div class={styles.avatar}>
    //       <Link href='/users'>

    //         <Avatar 
    //         radius='full'
    //         size='md'
    //         alt=''
    //         src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
    //         </Link>
    //     </div>
    //   <div className={styles.contentWrapper}>
    //   <Image className={styles.img} src={Paper} alt='' />
    //   <div class={styles.content}>Dolor morbi non arcu risus quis varius quam quisque. A diam maecenas sed enim ut sem viverra. Proin fermentum leo vel orci porta non pulvinar neque. Diam sollicitudin tempor id eu nisl nunc mi. Nibh tortor id aliquet lectus proin. Eget sit amet tellus cras adipiscing. Elementum sagittis vitae et leo duis ut diam. Lacus suspendisse faucibus interdum posuere lorem ipsum. Dapibus ultrices in iaculis nunc. Dignissim suspendisse in est ante in nibh mauris cursus. Tincidunt vitae semper quis lectus nulla at volutpat diam. Egestas congue quisque egestas diam. Mattis molestie a iaculis at erat.</div>
    //   </div>
    //   <div class={styles.username}>
    //    Johan Narcissus
    //   </div>
    //   </div>
     
    // </div>
  )
}

export default Quote
