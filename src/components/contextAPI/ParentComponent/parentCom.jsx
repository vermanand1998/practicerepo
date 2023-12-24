// import React from 'react'
// import ChildA from '../ChildComponentA/ChildA';
// function ParentCom() {
//   return (
//     <>
//     <ChildA />
//     </>
//   );
// }

// export default ParentCom;


// import React, { createContext } from 'react'
// import ChildA from '../ChildComponentA/ChildA';

// //STEP-1: create the context
// const FirstName=createContext();

// function ParentCom() {
//   return (
//     <>
//     {/* //STEP-2: Add provider for your context */}
//     <FirstName.Provider value={"Durgesh"}>
//         <ChildA />
//     </FirstName.Provider>
//     </>
//   );
// }

// export default ParentCom;
// //STEP-3: Export your Context
// export {FirstName};






import React, { createContext } from "react";
import ChildC from "../ChildComponentC/ChildC";

//STEP-1: create the context
const FirstName = createContext();
const LirstName = createContext();

function ParentCom() {
  return (
    <>
      {/* //STEP-2: Add provider for your context */}
      <FirstName.Provider value={"Anoop"}>
        <LirstName.Provider value={"Verma"}>
          <ChildC />
        </LirstName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default ParentCom;
//STEP-3: Export your Context
export { FirstName, LirstName };
