import React from "react";
import "./Mens.css"

const products = [
  { id: 1, name: "Casual Shirt", price: "$49", image: "https://via.placeholder.com/200x250?text=Shirt" },
  { id: 2, name: "Denim Jeans", price: "$79", image: "https://via.placeholder.com/200x250?text=Jeans" },
  { id: 3, name: "Leather Jacket", price: "$199", image: "https://via.placeholder.com/200x250?text=Jacket" },
  { id: 4, name: "Running Shoes", price: "$129", image: "https://via.placeholder.com/200x250?text=Shoes" },
];

const Mens = () => {
  return (
    <div className="mens-container">
      <header className="mens-header">
        <h1>Men's Collection</h1>
        <p>Style That Defines You</p>
      </header>

      <main className="mens-main">
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
              <button className="buy-button">Shop Now</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Mens;
