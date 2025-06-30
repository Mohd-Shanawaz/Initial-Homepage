import React from "react";
import "./Kids.css"; // Import the CSS file

const kidsProducts = [
  { id: 1, name: "Cartoon T-Shirt", price: "$19", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/q/4/m/5-6-years-doraemon-group-maadhav-fashions-original-imahbdun4gjf42x2.jpeg?q=70" },
  { id: 2, name: "Toy Car", price: "$29", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/6/8/f/remote-controlled-ferrari-with-opening-doors-3-webby-original-imahfet874duz39m.jpeg?q=70" },
  { id: 3, name: "Kids Sneakers", price: "$39", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-shoe/1/o/l/13c-wave001-hooh-now-comfort-in-fashion-original-imahd6bybuv3fqjn.jpeg?q=70" },
  { id: 4, name: "Backpack", price: "$25", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/2/n/i/kids-stylish-junior-school-bag-backpacks-cartoon-boy-girl-baby-3-original-imagj7efhm7czz2k.jpeg?q=70" },
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
