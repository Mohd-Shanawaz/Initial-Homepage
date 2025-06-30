import React from "react";
import "./Mens.css"

const products = [
  { id: 1, name: "Casual Shirt", price: "$49", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/o/8/m-nt-121-ziczac-urban-buccachi-original-imah9h6msefszqgc.jpeg?q=70" },
  { id: 2, name: "Denim Jeans", price: "$79", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/o/y/i/38-avdisheavywhsk-urbano-fashion-original-imah3gn9amsfgqb2.jpeg?q=70" },
  { id: 3, name: "Leather Jacket", price: "$199", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/p/p/l/m-1-no-leather-zyrona-original-imah8wg6bgggkghu.jpeg?q=70" },
  { id: 4, name: "Running Shoes", price: "$129", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/q/e/s/12-22g-1275-campus-blk-silver-original-imahbbhwgz9j3fr5.jpeg?q=70" },
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
