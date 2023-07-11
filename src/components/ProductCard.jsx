import React from "react";
import "../stylesheets/ProductCard.css";

const ProductCard = ({ product }) => {
  const { name, category, price, rating, image, description } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{product.productName}</h3>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
      <p>Description: {description}</p>
      <p>Brand: {product.brand.name}</p>
      <p>Country: {product.brand.country}</p>
      <button className="favorite-button">Favorite</button>
      <button className="add-to-cart-button">Add to Cart</button>
      <button className="buy-now-button">Buy Now</button>
    </div>
  );
};

export default ProductCard;
