import React from "react";
import "./Kids.css"; // Import the CSS file

const kidsProducts = [
  { id: 1, name: "Cartoon T-Shirt", price: "$19", image: "https://via.placeholder.com/200x250?text=T-Shirt" },
  { id: 2, name: "Toy Car", price: "$29", image: "https://via.placeholder.com/200x250?text=Toy+Car" },
  { id: 3, name: "Kids Sneakers", price: "$39", image: "https://via.placeholder.com/200x250?text=Sneakers" },
  { id: 4, name: "Backpack", price: "$25", image: "https://via.placeholder.com/200x250?text=Backpack" },
];

const Kids = () => {
  return (
    <div className="kids-container">
      <header className="kids-header">
        <h1>Kids Collection</h1>
        <p>Fun, Fashion, and Toys for Little Ones!</p>
      </header>

      <main className="kids-main">
        <div className="products-grid">
          {kidsProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
              <button className="buy-button">Shop Now</button>
            </div>
          ))}
        </div>
      </main>

      <footer className="kids-footer">
        <p>© 2025 KidsStore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Kids;
