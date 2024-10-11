import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../Features/userSlice";
import "../Styles/home.css";

const HomePage = () => {
  const isSignedIn = useSelector(selectSignedIn);
  const dispatch = useDispatch();
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };
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
          <GoogleLogin
            buttonText="Login"
            render={(renderProps) => {
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login-button"
              >
                Login with Google
              </button>;
            }}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy="single_host_origin"
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
