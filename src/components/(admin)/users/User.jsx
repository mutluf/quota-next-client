import React from 'react'
import styles from './user.module.css'
import Yasar1 from '../../../../public/yasar-kemal.jpg'
import Yasar2 from '../../../../public/yasar-kemal-2.jpg'
import Yasar3 from '../../../../public/yasar-kemal-3.jpg'
import Image from 'next/image'
const User = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Administrators</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Role</td>
            <td>Date</td>

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
                Super Admin
              </span>
            </td>
            <td>14.02.2024</td>

          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={Yasar2 }
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
                Admin
              </span>
            </td>
            <td>14.02.2024</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={Yasar3}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Kemal Yaşar
              </div>
            </td>
            <td>
              <span className={`${styles.role} ${styles.cancelled}`}>
                User
              </span>
            </td>
            <td>14.02.2024</td>

          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default User
