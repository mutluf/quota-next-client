import React from 'react'
import HourGlass from '../../public/hourglass.png'
import Image from 'next/image'
const loading = () => {
  return (
    <div style={{alignItems:"center", justifyContent:"center"}}>
        <Image  className='loading'
            src ={HourGlass} alt='loading...' width={50} height={50}
        />
        Yükleniyor...
    </div>
  )
}

export default loading
loading