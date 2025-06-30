import React from "react";
import "./PageNotFound.css"; 

const PageNotFound = () => {
  return (
    <div className="pagenotfound-container">
      <h1 className="error-code">404 </h1>
      <h2 className="error-message">Oops! Page Not Found</h2>
      <p className="error-description">
        The page you're looking for might have been removed or is temporarily unavailable.
      </p>
      <a href="/" className="home-button">Go Back Home</a>
    </div>
  );
};

export default PageNotFound;
