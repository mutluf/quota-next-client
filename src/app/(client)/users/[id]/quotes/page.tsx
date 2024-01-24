import React from 'react'

import styles from './page.module.css'
import Quote from '@/components/quote/Quote'

const UserQuotesPage = () => {
  return (
    <div className={styles.container}>
      <Quote/>
      <Quote/>
      <Quote/>
      <Quote/>
    </div>
     
  )
}

export default UserQuotesPage
