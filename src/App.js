import React from 'react'
import RoutesComponent from './components/RoutesComponent';
import UserContextProvider from './context/UserContextProvider';
import Footer from './components/footer/fotter';
import { hoursToMinutes } from 'date-fns';
function App() {
  return (
    <UserContextProvider>
    <RoutesComponent/>
    </UserContextProvider>
    // <>
    // <h1> Hellow World !!</h1>
    // </>
  );
}
export default App;





// import React, { useState } from "react";

// const App = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchAPIData = async () => {
//     try {
//       setLoading(true);

//       const response = await fetch(
//         "https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories",
//         {
//           method: "GET",
//           headers: {
//             projectId: "f104bi07c490",
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const jsonResponse = await response.json();

//       if (jsonResponse.status === "success") {
//         setCategories(
//           jsonResponse.data.map((category) => ({ name: category }))
//         );
//       } else {
//         throw new Error(`API error! Status: ${jsonResponse.status}`);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="navbar">
//       <button className="load-btn" onClick={fetchAPIData}>
//         Load Categories
//       </button>
//       <div className="category-list">
//         {loading ? (
//           <p>Loading...</p>
//         ) : categories.length > 0 ? (
//           <ul>
//             {categories.map((category, index) => (
//               <li key={index}>{category.name}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No categories available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;




// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import _debounce from "lodash/debounce";

// const App = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [isFetching, setIsFetching] = useState(false);
//   const [error, setError] = useState(null);

//   const config = {
//     headers: {
//       projectID: "7k1ct68pbbmr",
//     },
//   };

//   const fetchData = async () => {
//     if (isFetching) {
//       return;
//     }

//     try {
//       setIsFetching(true);
//       const res = await axios.get(
//         `https://academics.newtonschool.co/api/v1/reddit/post?limit=10&page=${page}`,
//         config
//       );

//       setData((prevData) => [...prevData, ...res.data.data]);
//       setPage((prevPage) => prevPage + 1);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again.");
//     } finally {
//       setIsFetching(false);
//     }
//   };

//   const handleScroll = _debounce(() => {
//     const scrollTop = document.documentElement.scrollTop;
//     const scrollHeight = document.documentElement.scrollHeight;
//     const clientHeight = document.documentElement.clientHeight;

//     if (scrollTop + clientHeight >= scrollHeight - 100) {
//       fetchData();
//     }
//   }, 200); // Adjust the debounce delay as needed

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [handleScroll]);

//   // Fetch data initially
//   useEffect(() => {
//     fetchData();
//   }, []); 

//   return (
//     <div>
//       {data.length > 0 &&
//         data.map((item, index) => (
//           <div key={index}>
//             <div>
//               <img
//                 src={item.author.profileImage}
//                 alt="author Image"
//                 style={{ width: "3rem" }}
//               />
//               <h5>{item.channel.name}</h5>
//               <p>{item.content}</p>
//               <img src={item.channel.image} width={650} alt="channel Image" />
//               <p>likeCount: {item.likeCount}</p>
//               <p>comments: {item.commentCount}</p>
//             </div>
//           </div>
//         ))}
//       {isFetching && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default App;




// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [albumData, setAlbumData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://academics.newtonschool.co/api/v1/music/album', {
//           method: 'GET',
//           headers: {
//             'projectId': 'f104bi07c490',
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const json = await response.json();
//         setAlbumData(json.data);
//       } catch (error) {
//         console.error('Error fetching album data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!albumData) {
//     return <div>Loading...</div>;
//   }

//   // Render your component with albumData
//   return (
//     <div>
//       {albumData.map((album) => (
//         <div key={album._id}>
//           <h1>{album.title}</h1>
//           {album.artists.map((artist) => (
//             <div key={artist._id}>
//               <p>Artist: {artist.name}</p>
//               <img src={artist.image} alt={artist.name} style={{ maxWidth: '200px' }} />
//               <p>Description: {artist.description}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;




// import React, { useState, useEffect } from 'react';

// const App = () => {

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://academics.newtonschool.co/api/v1/linkedin/post?search={"author.name":"Bridget"}', {
//           method: 'GET',
//           headers: {
//             'projectId': 'ut1dy4576cd1',
//             'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2M5OWRiZjY3YjAyMmZlZTZhZjI3YiIsImlhdCI6MTcwMzM0NzIzNiwiZXhwIjoxNzM0ODgzMjM2fQ.fQbdTA9-FNz49vnzN4tyhHIBd-uLIxv_rvKFO9AgtiA"
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const json = await response.json();
//         console.log(json.data);
//       } catch (error) {
//         console.error('Error fetching album data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//     </div>
//   );
// };

// export default App;



// import React, { useState } from 'react';

// const App = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleCheckboxChange = (value) => {
//     setSelectedOption(value === selectedOption ? null : value);
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           value="option1"
//           checked={selectedOption === 'option1'}
//           onChange={() => handleCheckboxChange('option1')}
//         />
//         Option 1
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           value="option2"
//           checked={selectedOption === 'option2'}
//           onChange={() => handleCheckboxChange('option2')}
//         />
//         Option 2
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           value="option3"
//           checked={selectedOption === 'option3'}
//           onChange={() => handleCheckboxChange('option3')}
//         />
//         Option 3
//       </label>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import { format } from 'date-fns';

// const App = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const formattedDate = format(selectedDate, "dd MMM ''yy");

//   return (
//     <div>
//       <label>Select Date:</label>
//       <input
//         type="date"
//         value={selectedDate.toISOString().split('T')[0]}
//         onChange={(e) => handleDateChange(new Date(e.target.value))}
//       />
//       <br />
//       <p>Selected Date: {formattedDate}</p>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const App = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleIconClick = () => {
//     const inputElement = document.getElementById('datepicker-input');
//     if (inputElement) {
//       inputElement.click();
//     }
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <div className="custom-datepicker-container">
//       <span className="custom-datepicker-icon" onClick={handleIconClick}>
//         📅 {/* Calendar icon */}
//       </span>
//       <input
//         type="text"
//         id="datepicker-input"
//         style={{ display: 'none' }}
//         readOnly
//         value={selectedDate ? selectedDate.toLocaleDateString() : ''}
//       />
//       <DatePicker
//         selected={selectedDate}
//         onChange={handleDateChange}
//         dateFormat="MM/dd/yyyy"
//         customInput={<></>}
//         popperPlacement="bottom-end"
//         popperModifiers={{
//           offset: {
//             enabled: true,
//             offset: '5px, 10px',
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default App;





// import React, { useState } from 'react';

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedValue, setSelectedValue] = useState(null);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionClick = (value) => {
//     setSelectedValue(value);
//     setIsOpen(false);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="dropdown" onMouseLeave={handleMouseLeave}>
//       <div className="dropdown-trigger" onMouseEnter={toggleDropdown}>
//         Hover me
//       </div>
//       {isOpen && (
//         <div className="dropdown-menu">
//           <div className="dropdown-content">
//             <div className="dropdown-item" onClick={() => handleOptionClick('Option 1')}>Option 1</div>
//             <div className="dropdown-item" onClick={() => handleOptionClick('Option 2')}>Option 2</div>
//             <div className="dropdown-item" onClick={() => handleOptionClick('Option 3')}>Option 3</div>
//           </div>
//         </div>
//       )}
//       {selectedValue && <p>Selected Value: {selectedValue}</p>}
//     </div>
//   );
// };

// export default App;







// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [isFetching, setIsFetching] = useState(false);
//   const [error, setError] = useState(null);
//   const [initialApiCallMade, setInitialApiCallMade] = useState(false);

//   const config = {
//     headers: {
//       projectID: "7k1ct68pbbmr",
//     },
//   };

//   const fetchData = async () => {
//     if (isFetching || (initialApiCallMade && page > 1)) {
//       return;
//     }

//     try {
//       setIsFetching(true);
//       const res = await axios.get(
//         `https://academics.newtonschool.co/api/v1/reddit/post?limit=10&page=${page}`,
//         config
//       );

//       setData((prevData) => [...prevData, ...res.data.data]);

//       setPage((prevPage) => prevPage + 1); // Update page here

//       if (!initialApiCallMade) {
//         setInitialApiCallMade(true);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again.");
//     } finally {
//       setIsFetching(false);
//     }
//   };

//   const debounce = (func, delay) => {
//     let timeoutId;
//     return (...args) => {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         func(...args);
//       }, delay);
//     };
//   };

//   const debouncedFetchData = debounce(fetchData, 500);

//   const handleScroll = () => {
//     const scrollTop = document.documentElement.scrollTop;
//     const scrollHeight = document.documentElement.scrollHeight;
//     const clientHeight = document.documentElement.clientHeight;

//     if (scrollTop + clientHeight >= scrollHeight - 100) {
//       debouncedFetchData();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []); // Empty dependency array to ensure the effect runs only once

//   useEffect(() => {
//     fetchData();
//   }, []); // Empty dependency array to ensure the effect runs only once

//   return (
//     <div>
//       {data.length > 0 &&
//         data.map((item, index) => (
//           <div key={index}>
//             <div>
//               <img
//                 src={item.author.profileImage}
//                 alt="author Image"
//                 style={{ width: "3rem" }}
//               />
//               <h5>{item.channel.name}</h5>
//               <p>{item.content}</p>
//               <img src={item.channel.image} width={650} alt="channel Image" />
//               <p>likeCount: {item.likeCount}</p>
//               <p>comments: {item.commentCount}</p>
//             </div>
//           </div>
//         ))}
//       {isFetching && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default App;



// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { format } from 'date-fns';

// function App() {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const formatDate = (date) => {
//     if (!date) return '';
//     return format(date, 'EEE, MMM dd');
//   };

//   return (
//     <div>
//       <h1>Date Picker Example</h1>
//       <DatePicker
//         selected={selectedDate}
//         onChange={handleDateChange}
//         dateFormat="yyyy-MM-dd"
//         placeholderText="Click to select a date"
//         open
//       />
//       <input
//         type="text"
//         value={selectedDate ? formatDate(selectedDate) : ''}
//         readOnly
//       />
//     </div>
//   );
// }

// export default App;
