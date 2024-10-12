import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../Features/userSlice";
import "../Styles/home.css";
import { useGoogleLogin } from "react-google-login";

const HomePage = () => {
  const isSignedIn = useSelector(selectSignedIn);
  const dispatch = useDispatch();
  const handleLogin = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      handleLogin(tokenResponse);
    },
    onerror: (tokenResponse) => {
      handleLogin(tokenResponse);
    },
  });
  return (
    <div className="home-page" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn && (
        <div className="login-message">
          <h2>📗</h2>
          <h1>A readers favourite place!</h1>
          <p>
            We provide high quality online resource for reading blogs. Just sign
            up and start reading quality blogs.
          </p>
          import {useGoogleLogin} from '@react-oauth/google';
          <button onClick={() => login()}>Sign in with Google 🚀</button>;
        </div>
      )}
    </div>
  );
};

export default HomePage;
