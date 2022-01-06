import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.util";

import "./header.style.scss";

export const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/shop' className='option'>
          CONTACT
        </Link>
        {currentUser ? (
          <div
            style={{ color: "red", fontWeight: "bold", cursor: "pointer" }}
            className='option'
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </div>
        ) : (
          <Link to='/signin' className='option'>
            LOGIN
          </Link>
        )}
      </div>
    </div>
  );
};
