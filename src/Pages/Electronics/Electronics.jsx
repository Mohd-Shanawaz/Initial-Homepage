import React from "react";
import "./Electronics.css"; 

const products = [
  { id: 1, name: "Smartphone", price: "$699", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$999", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: "$199", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Smartwatch", price: "$249", image: "https://via.placeholder.com/150" },
];

function Electronics() {
  return (
    <div className="electronics-container">
      <header className="electronics-header">
        <h1>Electronics Store</h1>
        <p>Find your perfect tech gadget!</p>
      </header>

      <main className="electronics-main">
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
              <button className="buy-button">Buy Now</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Electronics;
