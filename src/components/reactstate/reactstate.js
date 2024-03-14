// ReactState.js

import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import "./ReactState.css";
import ButtonN from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import UserContext,{DisplayProduct} from "../../context/UserContext";
import UserContext from "../../context/UserContext";

const ReactState = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setUser } = useContext(UserContext);
  const { setproductsData } = useContext(UserContext);
  useEffect(() => {
    shortProducts("Men");
  }, []);

  const shortProducts = async (value) => {
    try {
      var url="";
      if(value!=''){
       url=`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=24&page=1&filter={"gender":"${value}"}`
      }else{
       url=`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=24`
      }
      const response = await fetch(
        url,
        {
          method: "GET",
          headers: {
            projectId: "ecbv068658kc"
          }
        }
      );
      const json = await response.json();
      setData(json.data);
      setproductsData({ 'prod': json.data });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleImageError = (event) => {
    event.target.parentElement.style.backgroundColor = "#ddd"; // Set gray background color
    event.target.style.display = "none"; // Hide the broken image icon
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    margin: '5px',
    transition: 'background-color 0.3s ease',
  };

  const menStyle = {
    ...buttonStyle,
    backgroundColor: '#3498db',
    color: '#fff',
  };

  const womenStyle = {
    ...buttonStyle,
    backgroundColor: '#e74c3c',
    color: '#fff',
  };

  const allStyle = {
    ...buttonStyle,
    backgroundColor: '#555',
    color: '#fff',
  };

  return (
    <div className="react-state-container">
      <div style={{ textAlign: 'center', margin: '20px' , backgroundColor:'black'}}>
        <button onClick={() => shortProducts('Men')} style={menStyle}>MEN</button>
        <button onClick={() => shortProducts('Women')} style={womenStyle}>WOMEN</button>
        <button onClick={() => shortProducts('')} style={allStyle}>ALL</button>
      {/* <ButtonN variant="text" style={{ color: 'red', fontWeight: 'bold' }}>
        Text
      </ButtonN>
      <ButtonN variant="contained" style={{ backgroundColor: 'green', color: 'white' }}>
        Contained
      </ButtonN>
      <ButtonN variant="outlined" className="custom-outlined-button">
        Outlined
      </ButtonN> */}
        

      </div>
      {loading ? (
        <p className="loading-spinner">Loading...</p>
      ) : (
        <div>
          <ul className="product-list">
            {data.map((item) => (
              <li key={item._id} className="product-card">
                <Link to={`/products`} className="product-link">
                  <div className="product-image-container">
                    <img
                      src={item.displayImage}
                      alt={item.name}
                      className="product-image"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="product-details">
                    <h3 className="product-name">{item.name}</h3>
                    <p className="product-category">{item.subCategory}</p>
                    <p className="product-price">&#8377;{item.price}</p>

                    <p className="product-category">{item.color}</p>
                    <p className="product-price">&#8377;{item.brand}</p>
                    <p className="product-price">&#8377;{item.seller[item]}</p>
                  </div>
                </Link>
                {/* Add your logic for handleAddToFav here */}
                <button className="add-to-fav">
                  Add to Favorites
                </button>
              </li>
            ))}
          </ul>
        </div>

      )}
    </div>
  );
};

export default ReactState;


// CSS VIDEO LINK: https://www.youtube.com/watch?v=ESnrn1kAD4E
