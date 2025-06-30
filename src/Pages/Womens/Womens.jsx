import React from "react";
import "./Womens.css"; 

const womensProducts = [
  { id: 1, name: "Summer Dress", price: "$59", image: "https://via.placeholder.com/200x250?text=Dress" },
  { id: 2, name: "Handbag", price: "$120", image: "https://via.placeholder.com/200x250?text=Handbag" },
  { id: 3, name: "High Heels", price: "$89", image: "https://via.placeholder.com/200x250?text=Heels" },
  { id: 4, name: "Sunglasses", price: "$49", image: "https://via.placeholder.com/200x250?text=Sunglasses" },
];

const Womens = () => {
  return (
    <div className="womens-container">
      <header className="womens-header">
        <h1>Women's Collection</h1>
        <p>Elegance Meets Style</p>
      </header>

      <main className="womens-main">
        <div className="products-grid">
          {womensProducts.map((product) => (
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

export default Womens;
