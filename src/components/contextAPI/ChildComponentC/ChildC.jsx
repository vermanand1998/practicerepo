// import React, { createContext } from 'react'
// function ChildC() {
//   return (
//     <>
// <h1>Anand Verma</h1>
//     </>
//   );
// }

// export default ChildC;


// import React from "react";
// import { FirstName,LirstName } from "../ParentComponent/parentCom";

// function ChildC() {
//   return (
//     <>
//     <FirstName.Consumer>
//       {(fName) => {
//           return <h1>{fName} Verma</h1>
//       }}
//     </FirstName.Consumer>   
//     </>
//   );
// };

// export default ChildC;




import React from "react";
import { FirstName, LirstName } from "../ParentComponent/parentCom";

function ChildC() {
  return (
    <>
      <FirstName.Consumer>
        {(fName) => {
          return (
            <>
              <LirstName.Consumer>
                {(lName) => {
                  return (
                    <h1>
                      {fName} {lName}
                    </h1>
                  );
                }}
              </LirstName.Consumer>
            </>
          );
        }}
      </FirstName.Consumer>
    </>
  );
}

export default ChildC;
