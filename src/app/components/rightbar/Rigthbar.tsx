import React from 'react'
import styles from './rightbar.module.css'
import Link from 'next/link'

const list =[
    {id:1,name:"Ana sayfa",url:"/"},
    {id:2,name:"Kaydedilenler",url:"/about"},
    {id:3,name:"About Me",url:"/about"},
    {id:4,name:"About Me",url:"/about"},
    {id:5,name:"About Me",url:"/about"},
    {id:6,name:"About Me",url:"/about"},
]
const Rigthbar = () => {
  return (
    <div className={styles.container}>
        {
            list.map((item)=>{
                return(
                    <div className={styles.listItem}>
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

export default Rigthbar
