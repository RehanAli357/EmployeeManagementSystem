import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";

import LoginDetails from "../Context/LoginDetails";

import "../Assets/Style/LoginPage/login.css";

const LoginPage = () => {
  const [nav, setnav] = useState("");
  const {uds,setuds,setisLogin}=useContext(LoginDetails);
  const level = ["TopLevel", "MidLevel", "LowLevel"];
  
  const handleChange = (e) => {
    setnav((pdata) => {
      return e.target.value;
    });
  };

  const LoginData =(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setuds((pdata)=>{
      return {
        ...pdata,[name]:value
      };
    })
  }
  const navigate = useNavigate();

  const RouteNavigate = () => {
    if (uds.uid && uds.upswd) {
      if (uds.uid==="top" && uds.upswd==="123") {
        navigate(`/${nav}`);
        setisLogin((pdata)=>{
          return !pdata;
        })
      }
      else{
        alert("Invalid User Id Password");
      }
      setuds({
        uid:"",
        upswd:"",
      })
    }
    else{
      alert("Enter proper Data");
    }
  };
  return (
    <React.Fragment>
      <div className="LoginForm">
        <h1 className="Heading">Employee Management system</h1>
        <div className="LoginFormChild">
          <label>Select Your Level Type</label>
          <select onChange={(e) => handleChange(e)}>
            <option>ChooseRoute</option>
            {level.map((data, id) => {
              return <option key={id}>{data}</option>;
            })}
          </select>

          <input 
          type="text" 
          placeholder="Enter the userID"
          value={uds.uid}
          name="uid"
          onChange={(e)=>{LoginData(e)}}
          />

          <input 
          type="password" 
          placeholder="Enter the Password"
          value={uds.upswd}
          name="upswd"
          onChange={(e)=>{LoginData(e)}}
          />
          <button onClick={RouteNavigate}>Submit</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
