import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        Quota
      </Link>
      <div className={styles.features}>
        {/* //LINKS */}
        <div>
            links
        </div>
        {/* ICONS MAYBE */}
        <div>
            icons
        </div>
      </div>
    </div>
  )
}

export default Navbar
