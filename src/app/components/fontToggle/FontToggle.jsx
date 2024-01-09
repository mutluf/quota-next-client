"use client"
import React, { useContext } from 'react'
import styles from './fonttoggle.module.css'
import { FontContext } from '@/context/FontContext';


const FontToggle = () => {

  const {toggle,font}= useContext(FontContext);
  return (
    <div className={styles.container} onClick={toggle}
    
   >
      <div className={styles.text} style={font === "fontDefault" ? {fontFamily:'Papyrus' }:{fontFamily:'Arial'}}>  A</div>
      <div className={styles.ball} style={font === "fontDefault" ? {left:1} : {right:1}}></div>
      <div className={styles.text} style={font === "fontDefault" ? {fontFamily:'Papyrus' }:{fontFamily:'Arial'}}>A  </div>
    </div>
  )
}

export default FontToggle
