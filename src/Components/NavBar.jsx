import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setSignedIn,
  setUserData,
  setSearchInput,
} from "../Features/userSlice";

import "../Styles/navbar.css";
import { GoogleLogout } from "react-google-login";

const NavBar = () => {
  const [inputValue, setInputValue] = useState("tech");

  const isSignedIn = useSelector(selectSignedIn);

  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();

  const logout = (reponse) => {
    dispatch(setSignedIn(true));
    dispatch(setSearchInput(inputValue));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setInputValue(inputValue));
  };

  return (
    <div className="navbar">
      <h1 className="navbar-header">BlogMania 💬</h1>
      {isSignedIn && (
        <div className="blog-search">
          <input
            className="search"
            placeholder="Search for a blog"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="submit" onClick={handleClick}>
            Search
          </button>
        </div>
      )}

      {isSignedIn ? (
        <div className="navbar-user-data">
          <Avatar
            className="user"
            src={userData?.imageUrl}
            alt={userData?.name}
          />
          <h1 className="signedIn">{userData?.givenName}</h1>
          <GoogleLogout
            buttonText="Logout 😦"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="logout-button"
              >
                Logout 😦
              </button>
            )}
            onLogoutSuccess={logout}
          />
        </div>
      ) : (
        <h1 className="notSignedIn">User not available 😞</h1>
      )}
    </div>
  );
};

export default NavBar;
