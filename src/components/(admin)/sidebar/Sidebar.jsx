
import React from 'react'
import styles from './sidebar.module.css'
import MenuLinks from '@/components/(admin)/menuLinks/MenuLinks'
import UserPhoto from '../../../../public/yasar-kemal.jpg'
import {
  MdDashboard,
  MdOutlineTexture,
  MdSupervisedUserCircle,

} from "react-icons/md"
import Image from 'next/image'

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Admin",
        path: "/admin",
        icon: <MdDashboard />
      },
      {
        title: "Users",
        path: "/admin/users",
        icon: <MdSupervisedUserCircle />
      },
      {
        title: "Posts",
        path: "/admin/posts",
        icon: <MdOutlineTexture />
      }
    ]
  },
]
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src={UserPhoto} alt='' width={50} height={50} />
        <div className={styles.userDetail}>
          <div className={styles.username}>Yaşar Kemal</div>
          <div className={styles.userTitle}>Administrator</div>
        </div>
      </div>
      <ul className={styles.list}>
        <span className={styles.category}>{menuItems[0].title} </span>
        <li>

          {menuItems[0].list.map((item) => (

            <MenuLinks item={item} key={item.title} />
          ))}
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
