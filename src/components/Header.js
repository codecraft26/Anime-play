import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="main-nav main-nav flex">
      <h2>Anime-finder</h2>

      <div className="nav-links">
        <ul class="flex">
          <li>
            <a href="#" className="hover-links">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover-links">
              Customers
            </a>
          </li>
          <li>
            <a href="#" className="hover-links">
              Pricig
            </a>
          </li>
          <li>
            <a href="#" className="hover-links">
              Resources
            </a>
          </li>
          <li>
            <a href="#" className="hover-links  secondary-button">
              SignIn
            </a>
          </li>
          <li>
            <a href="#" className="hover-links primary-button">
              SignUp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
