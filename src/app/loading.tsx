import React from 'react'
import HourGlass from '../../public/hourglass.gif'
import Image from 'next/image'
const loading = () => {
  return (
    <div className='loading'>
        <Image
            src ={HourGlass} alt='loading...' width={40} height={40}
        />
        Yükleniyor...
    </div>
  )
}

export default loading
loading