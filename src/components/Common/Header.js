import React from "react";
import "../../styles/header.css";

const Header = () => {
  return (
    <header>
      <div className="banner-bar" />
      <div className="header">
        <img className="header-logo" src="/logo.svg" alt="logo" />
      </div>
    </header>
  );
};

export default Header;
