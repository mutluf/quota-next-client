import React from 'react'
import styles from './user.module.css'
import Search from '@/components/(admin)/search/Search'
import Image from 'next/image'
import Yasar1 from '../../../../../public/yasar-kemal.jpg'
import Yasar2 from '../../../../../public/yasar-kemal-2.jpg'
import Link from 'next/link'
import Pagination from '@/components/(admin)/pagination/Pagination'

const UserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search for a user..."} />
        <button className={styles.addButton}>Add New</button>
      </div>
      <div className={styles.table}>

        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Date</td>
              <td>Action</td>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src={Yasar1}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  Yaşar Kemal
                </div>
              </td>
              <td>
                <span className={`${styles.role} ${styles.admin}`}>
                  yasar@gmail.com
                </span>
              </td>
              <td>14.02.2024</td>
              <td>
                <div className={styles.buttons}>

                  <Link href="/">
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <Link href="/">
                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                  </Link>
                </div>
              </td>

            </tr>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src={Yasar2}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  Yaşar
                </div>
              </td>
              <td>
                <span className={`${styles.role} ${styles.done}`}>
                  idilikler@gmail.com
                </span>
              </td>
              <td>14.02.2024</td>
            </tr>

          </tbody>
        </table>
        <Pagination/>
      </div>
    </div>
  )
}

export default UserPage
