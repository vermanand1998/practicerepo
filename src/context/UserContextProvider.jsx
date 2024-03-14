import React, { useState } from "react";
import UserContext from "./UserContext";
const UserContextProvider = ({ children }) => {
  const [productsData, setproductsData] = useState([]);

  return (
    <UserContext.Provider value={{productsData,setproductsData}}>
        {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

