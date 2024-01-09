"use client"
import React, { KeyboardEvent, useEffect } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Input} from "@nextui-org/react";
import styles from './dictionary.module.css'
import Dictionar from '../../../../public/dictionary.png'
import Image from "next/image";
import { useState } from 'react';
import {DictionaryApiResponseType, DictionaryData} from '../../../types/types'
import { stringify } from "querystring";
// https://sozluk.gov.tr/gts_id?id=alt%C4%B1n

const Dictionary = () => {
  const [data, setData] = useState<DictionaryData | null>(null);
  const [word, setWord] = useState<string>("");
  const link ="https://sozluk.gov.tr";

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchData();
    }
  };


    useEffect(() => {
      fetchData();
      console.log("trying")
    }, []);
  

  const fetchData = async () => {
    //if koşulunu yazmayınca yukarıdaki useffect ile istek atıyor ve boş veri dönüyor.
    if(word !== ""){
    try {
      const response  = await fetch(`https://sozluk.gov.tr/gts_id?id=${word}`);

      if (response.ok) {
        const result: DictionaryApiResponseType[] = await response.json();

        const firstItem = result[0];

        const transformedData: DictionaryData = {
          word: word,
          meanings: firstItem.anlamlarListe.map((meaning) => ({
            meaning: meaning.anlam,
            examples: meaning.orneklerListe || [],
          })),
          idioms: firstItem.atasozu,
        };

        setData(transformedData);
      } else {
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      
      console.error('Error fetching data:', error);
    }
  }
  };

  return (
    <div className={styles.container}>
    <Card className="max-w-[400px]">
    <CardHeader className="flex gap-3">
     <Image className={styles.img} src={Dictionar} alt="dictionary"/>  
       <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-x-4">
       <div className="flex flex-col gap-x-4 ">
      </div>
      <div className={styles.input}>
      <Input type="text" label="Sözlük" placeholder="Kelime ara" 
      onValueChange={(prev)=>{
        setWord(prev)
      }}
      onKeyDown={handleKeyPress}
      size="lg" 
      />
      </div>       
        </div>
      
    </CardHeader>
    <Divider/>
    <div className={styles.cardbody}>
   
    <CardBody>
    
    {word ?(
      data?.meanings?.map((item,index)=>{
        <p key={item.meaning} className={styles.title}>Anlamlar</p>
        return(  <div className={styles.content}>      
          <p><span className={styles.index}>{index+1})</span> {item.meaning}</p>          
          {
            item.examples &&(
              item.examples?.map((example)=>{
                return(
                  <div key={example.ornek_sira}>                                 
                  {
                    example.yazar && (
                      example.yazar.map((author)=>{
                        return( 
                          <p key={author.yazar_id}>
                            <span className={styles.bold}>örn: </span> "{example.ornek}"<span className={styles.bold}> -{author.tam_adi}</span>                        
                        </p> 
                        )
                      }) 
                    )
                  }           
                  <br></br>
                  </div>
                )               
              })
            )
          }
          </div>                  
        )
      })      
    )  :(
      <>
      
      </>
    )    
    }
    <Divider/>
    <div className={styles.content}>  
          {data !== null ?(
      data.idioms?.map((item,index)=>{
        <p className={styles.title}>Atasözleri</p>
        return(  <>      
          <p key={item.on_taki}><span className={styles.index}>{index+1})</span> {item.madde}</p>          
          </>                  
        )
      })      
    )  :(
      <>
      
      </>
    )          
    }
    </div>        
          </CardBody>      
    </div>
    <Divider/>

    <CardFooter>
      <Link
        isExternal       
        showAnchorIcon
        href={link}
        
      >
        Detay için ziyaret edin.
      </Link>
    </CardFooter>
  </Card>
  </div>
  )
}

export default Dictionary
