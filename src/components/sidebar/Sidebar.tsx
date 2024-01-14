import React from 'react'
import styles from './sidebar.module.css'
import Link from 'next/link'
import Home from '../../../public/home.png'
import Bookmark from '../../../public/bookmark.png'
import Image from 'next/image'
const list =[
    {id:1,name:"Ana sayfa",url:"/",icon:Home},
    {id:2,name:"Kaydedilenler",url:"/bookmarks",icon:Bookmark},
    {id:3,name:"Dergiler",url:"/journals",icon:Home},
    {id:4,name:"About Me",url:"/about",icon:Home},
    {id:5,name:"About Me",url:"/about",icon:Home},
    {id:6,name:"About Me",url:"/about",icon:Home},
]
const Sidebar = () => {
  return (
    <div className={styles.container}>
        {
            list.map((item)=>{
                return(
                    <div className={styles.listItem}>
                        <Image className={styles.icon} src={item.icon}  alt='icons'/>
                        <Link href={item.url}>
                           
                        {item.name}
                        </Link>
                    </div>
                )                
            })
        }   
    </div>
  )
}

export default Sidebar
