import { useContext } from "react";
import UserContext from "../../context/UserContext";
// import UserContext from "../../context/UserContext";
import ReactState from "../reactstate/reactstate";


const CompTwo = () => {
  // const {user}=useContext(UserContext);
  const {productsData}=useContext(UserContext);
  const data=productsData.prod;
    return (
      <>
       {/* <h1>{user.Anand}</h1> */}
       {false ? (
        <p className="loading-spinner">Loading...</p>
      ) : (
        <div>
          <ul className="product-list">
            {data.map((item) => (
              <li key={item._id} className="product-card">
                  <div className="product-image-container">
                    <img
                      src={item.displayImage}
                      alt={item.name}
                      className="product-image"
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
                {/* Add your logic for handleAddToFav here */}
                <button className="add-to-fav">
                  Add to Favorites
                </button>
              </li>
            ))}
          </ul>
        </div>

      )}
      </>
    );
  };
  
  export default CompTwo;
  

