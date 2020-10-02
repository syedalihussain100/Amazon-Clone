import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* Logo on the left and right image */}
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* Search-box */}
      <div className="header_search">
        <input
          type="text"
          className="header_searchInput"
          placeholder="Search..."
        />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* links */}
      <div className="headerNav">
        {/* first link */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header_option">
            <span className="header__optionlineone">Hello {user?.email}</span>
            <span className="header__optionlinetwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        {/* second link */}
        <Link to="/login" className="header__link">
          <div className="header_option">
            <span className="header__optionlineone">Returns</span>
            <span className="header__optionlinetwo">& Order</span>
          </div>
        </Link>
        {/* third link */}
        <Link to="/login" className="header__link">
          <div className="header_option">
            <span className="header__optionlineone">Your</span>
            <span className="header__optionlinetwo">Prime</span>
          </div>
        </Link>
        {/* four link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionbasket">
            {/* shopping basket item */}
            <ShoppingBasketIcon />
            {/* Number of item in the basket */}
            <span className="header__optionlinetwo headerbasket__option">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      {/* Basket item with Number! */}
    </nav>
  );
}

export default Header;
