import React from "react";
import "../Assets/Style/LoginPage/login.css";
const LoginPage = () => {
  return (
    <React.Fragment>
      <div className="LoginForm">
        <h1 className="Heading">Employee Management system</h1>
        <div className="LoginFormChild">
            <input type="text"
            placeholder="Select The Level"
            />
            <input type="text" 
            placeholder="Enter the userID"
            />
            <input type="password"
            placeholder="Enter the Password"
            />
            <button>Submit</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
