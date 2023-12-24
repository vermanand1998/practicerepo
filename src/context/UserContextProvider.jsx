import React, { useState } from "react";
// import UserContext, { DisplayProduct } from "./UserContext";
import UserContext from "./UserContext";
// const UserContext=createContext()
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [productsData, setproductsData] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser ,productsData,setproductsData}}>
      {/* <DisplayProduct.Provider value={{productsData,setproductsData}}> */}
        {children}
      {/* </DisplayProduct.Provider> */}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

