"use client"
import { createContext, useEffect, useState } from "react";
export const FontContext = createContext();

const getFromLocalStorage = ()=>{
   
    //  if the transition is completed if its the client component use that local storage
    if(typeof window !== 'undefined' && window.localStorage){

        const value = localStorage.getItem("font");
        return value || "fontDefault";
    }
    
}
export const FontContextProvider = ({children})=>{

    const [font, setFont] = useState(()=>{
        return getFromLocalStorage();
    });

    const toggle = () =>{
        setFont(font=== "fontDefault"? "fontsegoe": "fontDefault");
    }

    useEffect(()=>{
        localStorage.setItem("font", font);
    },[font]);

    return (<FontContext.Provider value={{font, toggle}}>
        {children}
    </FontContext.Provider>);
};