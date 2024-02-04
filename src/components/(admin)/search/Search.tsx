"use client"
import React, { ChangeEvent } from 'react'
import styles from './search.module.css'
import { MdSearch } from 'react-icons/md'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'


interface PlaceholderProps{
    placeholder:string
  }

const Search = ( {placeholder}:PlaceholderProps) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const {replace} =useRouter();

    const handleSearch=(e: ChangeEvent<HTMLInputElement>)=>{
        const params = new URLSearchParams(searchParams);

        if(e.target.value){

            params.set("username", e.target.value);
        }else{
            params.delete("username");
        }
    
        replace(`${pathname}?${params}`);
    }

   
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <MdSearch />
                <input type='text' placeholder={placeholder} className={styles.input} onChange={handleSearch} />
            </div>
        </div>
    )
}

export default Search