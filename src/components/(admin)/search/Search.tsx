"use client"
import React, { ChangeEvent } from 'react'
import styles from './search.module.css'
import { MdSearch } from 'react-icons/md'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'


interface SearchProps{
    placeholder:string;
    paramKey:string;
  }

const Search = ( {placeholder,paramKey}:SearchProps) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

     
    const {replace} =useRouter();

    const handleSearch=(e: ChangeEvent<HTMLInputElement>)=>{
        const params = new URLSearchParams(searchParams);

        if(e.target.value){

            params.set(paramKey, e.target.value);
        }else{
            params.delete(paramKey);
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