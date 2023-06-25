import React from "react";
import logo from "../resources/images/logo.png";

const Header = () => {
  return (
    <header id="header">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid d-flex justify-content-center align-items-center">
          <a class="navbar-brand logo m-0 p-0" href="/">
            <img src={logo} alt="logo-image" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
