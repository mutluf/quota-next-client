import React from 'react'
import Quote from '../../../components/quote/Quote'
import styles from './page.module.css'

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
