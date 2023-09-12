import React from "react";

import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import classes from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
  const totalCartItems = useSelector((state) => state.totalItems);

  return (
    <header className={classes.header}>
      <div className={classes.header_logo}>
        <StorefrontOutlinedIcon
          className={classes.logoImage}
          fontSize="large"
        />
        <h2 className={classes.logoTitle}> eSHOP</h2>
      </div>
      <div className={classes.header_search}>
        <input type="text" className={classes.searchInput} />
        <SearchIcon className={classes.searchIcon} />
      </div>
      <div className={classes.header_nav}>
        <div className={classes.nav_item}>
          <span className={classes.nav_itemLine1}>Hello Guest</span>
          <span className={classes.nav_itemLine2}>Sign In</span>
        </div>
        <div className={classes.nav_item}>
          <span className={classes.nav_itemLine1}>Your</span>
          <span className={classes.nav_itemLine2}>Shop</span>
        </div>
        <div className={classes.itemBasket}>
        
            <ShoppingBasketIcon fontSize="large" />
            <span className={classes.navCount}>{totalCartItems}</span>
         
        </div>
      </div>
    </header>
  );
};

export default Header;
