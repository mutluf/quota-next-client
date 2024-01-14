import React from 'react'
import styles from './rightbar.module.css'
import Dictionary from '../dictionary/Dictionary'
const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dictionary}>
      <Dictionary/>
      </div>
        
    </div>
  )
}

export default Rightbar
