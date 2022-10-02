import React from "react";
import "./Navbar.css";
import { ReactComponent as Login } from "../Assets/login.svg";
import { ReactComponent as Search } from "../Assets/search.svg";
import { ReactComponent as Fav } from "../Assets/fav.svg";
import { ReactComponent as Cart } from "../Assets/cart.svg";

function Navbar({ count }) {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-left">
          <h3 className="navbar-title">AccioJob</h3>
          <div className="navbar-pages">
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Pages</li>
            </ul>
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-buttons">
            <button type="button">
              <Login />
              <span>Login / Register</span>
            </button>
            <button type="button">
              <Search />
            </button>
            <button type="button" className="navbar-button-count">
              <Cart />
              <span>{count}</span>
            </button>
            <button type="button" className="navbar-button-count">
              <Fav />
              <span>1</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;