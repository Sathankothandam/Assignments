import React, {createContext} from "react";
import {useState} from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider =({children})=>{

    


    return <CartContext.Provider value={100}>{children}</CartContext.Provider>
};
