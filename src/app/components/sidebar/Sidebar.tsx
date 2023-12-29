import React from 'react'
import styles from './sidebar.module.css'
import Dictionary from '../dictionary/Dictionary'
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dictionary}>
      <Dictionary/>
      </div>
        
    </div>
  )
}

export default Sidebar
