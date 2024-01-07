"use client"
import { FontContext } from '@/context/FontContext'
import React, { useContext, useEffect, useState } from 'react'

const FontProvider = ({children}) => {
    const {font}= useContext(FontContext);
    const [mounted, setMounted]= useState(false);

    useEffect(()=>{
      setMounted(true);
    },[]);

  if(mounted)
  {
    return (
      <div className={font}>   
        {children}
      </div>
    )
  }
}

export default FontProvider
