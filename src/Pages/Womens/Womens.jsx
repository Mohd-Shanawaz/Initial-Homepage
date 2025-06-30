import React from "react";
import "./Womens.css"; 

const womensProducts = [
  { id: 1, name: "Summer Dress", price: "$59", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/p/j/v/m-6001-dress-new-zwerlon-original-imah2thfsyfjbe3u.jpeg?q=70" },
  { id: 2, name: "Handbag", price: "$120", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/r/n/j/-original-imagtz26zahaqvkh.jpeg?q=70" },
  { id: 3, name: "High Heels", price: "$89", image: "https://rukminim2.flixcart.com/image/612/612/l30hmkw0/sandal/0/j/m/7-icn-si-w-02-green-40-iconics-green-original-image8f4gxqzs7cz.jpeg?q=70" },
  { id: 4, name: "Sunglasses", price: "$49", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/g/i/l/m-3026-gold-black-b-piraso-original-imah8acaunve3vke.jpeg?q=70" },
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
