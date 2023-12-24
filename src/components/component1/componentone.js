/// Import necessary libraries and styles
import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './componentone.css'; // Import your custom styles

// SamplePrevArrow and SampleNextArrow components remain the same
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`custom-arrow custom-prev-arrow ${className}`}
      style={{ ...style, display: 'block', background: '#FF5733' }} // Custom styling
      onClick={onClick}
    />
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`custom-arrow custom-next-arrow ${className}`}
      style={{ ...style, display: 'block', background: '#33FF57' }} // Custom styling
      onClick={onClick}
    />
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
};

const CompOne = () => {
  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    fetchMusic();
  }, []);

  const fetchMusic = async () => {
    try {
      const response = await fetch('https://academics.newtonschool.co/api/v1/music/song', {
        headers: {
          projectId: 'drbdz4ox1jwn',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch music data');
      }

      const result = await response.json();
      setMusicData(result.data);
    } catch (error) {
      console.error('Error fetching music:', error.message);
    }
  };

  return (
    <div className="app-container">
      <Slider {...settings}>
        {musicData.length > 0 ? (
          musicData.map((song) => (
            <div key={song._id} className="carousel-item">
              <div className="content-container">
                <h2>{song.title}</h2>
                <p className="artist">Artist: {song.artist[0].name}</p>
                <p className="mood">Mood: {song.mood}</p>
                <img className="thumbnail" src={song.thumbnail} alt={song.title} />
                <audio controls className="audio-player">
                  <source src={song.audio_url} type="audio/mp3" />
                  Your browser does not support the audio tag.
                </audio>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Slider>
    </div>

    
  );
};

export default CompOne;

