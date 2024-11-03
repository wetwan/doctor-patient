/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext } from "react";
import { doctors } from "../assets/assets";

export const ShopContext = createContext()

const ShopContextProvider = (props) => {

  const value ={
    doctors
  }

  return(
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider