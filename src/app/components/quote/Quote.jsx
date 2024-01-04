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
      
      <div className={styles.wrapper}>
        <div class={styles.avatar}>
          <Link href='/users'>

            <Avatar 
            radius='full'
            size='md'
            alt=''
            src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
            </Link>
        </div>
      
      <Image className={styles.img} src={Paper} alt='' />
      <div class={styles.content}>Dolor morbi non arcu risus quis varius quam quisque. A diam maecenas sed enim ut sem viverra. Proin fermentum leo vel orci porta non pulvinar neque. Diam sollicitudin tempor id eu nisl nunc mi. Nibh tortor id aliquet lectus proin. Eget sit amet tellus cras adipiscing. Elementum sagittis vitae et leo duis ut diam. Lacus suspendisse faucibus interdum posuere lorem ipsum. Dapibus ultrices in iaculis nunc. Dignissim suspendisse in est ante in nibh mauris cursus. Tincidunt vitae semper quis lectus nulla at volutpat diam. Egestas congue quisque egestas diam. Mattis molestie a iaculis at erat.</div>
      <div class={styles.username}>
       Johan Narcissus
      </div>
      </div>
     
    </div>
  )
}

export default Quote
