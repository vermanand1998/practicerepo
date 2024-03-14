// /// Import necessary libraries and styles
// import React, { useState, useEffect,useContext } from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
// import './componentone.css'; // Import your custom styles
// import UserContext from "../../context/UserContext";
// // SamplePrevArrow and SampleNextArrow components remain the same
// const SamplePrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   const {productsData}=useContext(UserContext);
//   return (
//     <div
//       className={`custom-arrow custom-prev-arrow ${className}`}
//       style={{ ...style, display: 'block', background: '#FF5733' }} // Custom styling
//       onClick={onClick}
//     />
//   );
// };

// const SampleNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`custom-arrow custom-next-arrow ${className}`}
//       style={{ ...style, display: 'block', background: '#33FF57' }} // Custom styling
//       onClick={onClick}
//     />
//   );
// };

// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 5,
//   slidesToScroll: 2,
//   prevArrow: <SamplePrevArrow />,
//   nextArrow: <SampleNextArrow />,
// };

// const CompOne = () => {
//   const [musicData, setMusicData] = useState([]);

//   useEffect(() => {
//     fetchMusic();
//   }, []);

//   const fetchMusic = async () => {
//     try {
//       const response = await fetch('https://academics.newtonschool.co/api/v1/music/song', {
//         headers: {
//           projectId: 'drbdz4ox1jwn',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch music data');
//       }

//       const result = await response.json();
//       setMusicData(result.data);
//     } catch (error) {
//       console.error('Error fetching music:', error.message);
//     }
//   };

//   return (
//     <div className="app-container">
//       <Slider {...settings}>
//         {musicData.length > 0 ? (
//           musicData.map((song) => (
//             <div key={song._id} className="carousel-item">
//               <div className="content-container">
//                 <h2>{song.title}</h2>
//                 <p className="artist">Artist: {song.artist[0].name}</p>
//                 <p className="mood">Mood: {song.mood}</p>
//                 <img className="thumbnail" src={song.thumbnail} alt={song.title} />
//                 <audio controls className="audio-player">
//                   <source src={song.audio_url} type="audio/mp3" />
//                   Your browser does not support the audio tag.
//                 </audio>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Loading...</p>
//         )}
//       </Slider>
//     </div>

    
//   );
// };

// export default CompOne;



// import React, { useEffect, useRef, useState } from "react";
// import style from "./Carousel.module.css";
// // import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import { useNavigate } from "react-router-dom";

// const CompOne = ({ data = [] }) => {
//   const [slide, setSlide] = useState(0);
//   const nextSlide = () => {
//     setSlide(slide === data.length - 1 ? 0 : slide + 1);
//   };
//   const prevSlide = () => {
//     setSlide(slide === 0 ? data.length - 1 : slide - 1);
//   };
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setInterval(
//       () =>
//         setSlide((currentSlide) =>
//           currentSlide === data.length - 1 ? 0 : currentSlide + 1
//         ),
//       5000
//     );
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
//   return (
//     <div className={style.carousel}>
//       <ChevronLeftIcon className={style.arrow_left} onClick={prevSlide} />
//       {data.map((item, idx) => {
//         return (
//           <img
//             src={item.src}
//             alt={item.alt}
//             key={idx}
//             className={slide === idx ? style.slides : style.slide_hidden}
//             onClick={() => navigate(item.href)}
//           />
//         );
//       })}
//       <ChevronRightIcon className={style.arrow_right} onClick={nextSlide} />
//       <span className={style.indicators}>
//         {data.map((_, idx) => {
//           return (
//             <button
//               key={idx}
//               className={
//                 slide === idx ? style.indicator : style.indicator_inactive
//               }
//               onClick={() => setSlide(idx)}
//             ></button>
//           );
//         })}
//       </span>
//     </div>
//   );
// };

// export default CompOne;





import React from "react";
import Style from "./index.module.css";
import { category } from "../category";
import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";

const CompOne = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 7,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
    },
  };
  return (
    <div className={Style.mainContainer}>
      <Carousel responsive={responsive}>
        {category.map((name, index) => {
          return (
            <NavLink key={index} to={`/subCategory/${name.category}`}>
              <div>
                <img
                  className={Style.categoryImage}
                  src={name.url}
                  alt="category Image"
                />
              </div>
            </NavLink>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CompOne;
