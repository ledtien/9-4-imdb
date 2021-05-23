import React from "react";
import { AuthPage } from "../pages";
import { RegisterPage } from "../pages";

const Auth = ({ authRoute }) => {
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>IMDB</h1>
          {authRoute === "login" && <AuthPage />}
          {authRoute === "register" && <RegisterPage />}
        </div>
      </div>
    </div>
  );
};

export default Auth;
