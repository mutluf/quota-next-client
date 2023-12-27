import React from 'react'
import styles from './createbutton.module.css'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Pen from '../../../../public/pen.png'

const CreateButton = () => {
  return (
    <div>
      <Button className={styles.button}
     >
        <Image className={styles.img} src={Pen} alt='' />
      </Button>
    </div>
  )
}

export default CreateButton
