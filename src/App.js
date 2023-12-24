import React from 'react'
import RoutesComponent from './components/RoutesComponent';
import UserContextProvider from './context/UserContextProvider';
function App() {
  return (
    <UserContextProvider>
    <RoutesComponent/>
    </UserContextProvider>
  );
}
export default App;


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
