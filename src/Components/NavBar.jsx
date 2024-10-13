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
import { googleLogout } from "@react-oauth/google";

const NavBar = () => {
  const [inputValue, setInputValue] = useState("tech");

  const isSignedIn = useSelector(selectSignedIn);

  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();

  const logout = (reponse) => {
    googleLogout();
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setSearchInput(inputValue));
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
          <button onClick={logout} className="logout-button">
            Logout 😦
          </button>
        </div>
      ) : (
        <h1 className="notSignedIn">User not available 😞</h1>
      )}
    </div>
  );
};

export default NavBar;
