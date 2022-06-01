import { useState} from 'react';
import {createContext} from "react";


export const ThemeContext = createContext();

export const ThemeProvider =({children})=>{
    const [theme,setTheme] =useState("light");


    const toggleTheme =() =>{
        if(theme ==="light"){
            setTheme("dark");
        }
        else setTheme("light");
    };

    return (
        <ThemeContext.Provider     
                value ={{
                    theme: theme,
                    isLight: theme === "light",
                    toggleTheme: toggleTheme,
                }}
                >
                {children}
        </ThemeContext.Provider>
    );

};