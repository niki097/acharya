import { createContext, useContext, useState } from "react";

const  LanguageContext=createContext();

export const useLanguage=()=>useContext(LanguageContext)
   
export const LanguageContextProvider =({children})=>{
    const [language, setLanguage] = useState('english');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

    return(
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
    
}