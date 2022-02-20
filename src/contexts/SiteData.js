import React, { createContext, useEffect, useState } from 'react';

// Step1: Create the context and ensure to export it
export const SiteContext = createContext();

// Step2: Create a function that provides the context.
// NOTE: remember to pass children as prop
export default function SiteContextProvider({children}){
    // Within the provider function, INIT STATES
    let [siteTitle, setSiteTitle] = useState('Default Title');
    let [favoriteColor, setFavoriteColor] = useState('brown');
    let [luckyNumbers, setLuckyNumbers] = useState([]);


    // ESTABLISH LOGIC TO MANAGE STATES
    useEffect(function(){
        setSiteTitle('Updated Through use effect');
    },[]);

    useEffect(function(){
        setLuckyNumbers([3, 7, 9]);
    },[]);

    // PREPARE THE FINAL CONTEXT OBJECT
    const dataBall = {
        siteTitle,
        favoriteColor,
        setFavoriteColor, // Notice that we can pass functions through objects
        luckyNumbers
    }

    // RETURN the Provider with the proper syntax
    // SiteContext matches line 4. Value is the data passed. Children is the argument from the start of the function.
    return <SiteContext.Provider value={dataBall}>{children}</SiteContext.Provider>;
    
}