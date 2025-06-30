import React from "react";
import "./Electronics.css"; 

const products = [
  { id: 1, name: "Smartphone", price: "$699", image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/2/g/-original-imahbr2cz5apcwze.jpeg?q=70" },
  { id: 2, name: "Laptop", price: "$999", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZApOBVSoHshNGPumF29Nev6wZaUNsaVuh_Q&s" },
  { id: 3, name: "Headphones", price: "$199", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/9/0/r/rockerz-550-boat-original-imahyftgtk6ahqjc.jpeg?q=70" },
  { id: 4, name: "Smartwatch", price: "$249", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-watch/y/0/6/1-smart-watch-800-ultra-fuziqra-men-women-original-imah3wyebyceckhz.jpeg?q=70" },
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
