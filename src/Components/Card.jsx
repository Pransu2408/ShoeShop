import React from "react";
import "../Styles/card.css";

const Card = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
 
  return (
    <div className="cards">
      <div className="image_box" onClick={() => handleClick(item)}>
        <img className="shoepic" src={img} alt="shoe"></img>
        <p className="atc">Add to Cart</p>
      </div>
      <div className="details">
        <p className="shoename">{title}</p>
        <p className="typashoe">{author}</p>
        <p className="price">MRP : &#x20B9; {price}</p>
        {/* <button onClick={() => handleClick(item)}>Add to Cart</button> */}
      </div>
    </div>
  );
};

export default Card;
