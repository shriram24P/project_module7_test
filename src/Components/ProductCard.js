import React from "react";
import "./ProductCard.css";
import { ReactComponent as Star } from "../Assets/star.svg";

function ProductCard({
  newPrice,
  oldPrice,
  productImage,
  productName,
  setCount,
}) {
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="product-card">
      <img src={productImage} alt="product"></img>
      <div className="product-details">
        <h4>{productName}</h4>
        <div className="product-other-details">
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div className="product-details-price">
            <div className="product-details-old-price">
              <span className="product-details-old-price-content">
                {oldPrice}
              </span>
              <span>/-</span>
            </div>
            <div className="product-details-new-price">
              <span>{newPrice}/-</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-add-to-cart">
        <button type="button" onClick={handleClick}>
          <h3>ADD TO CART</h3>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;