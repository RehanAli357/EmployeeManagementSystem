import React, { useEffect, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import TotalValues from "./Components/TotalValues";
import LoginDetails from "../Context/LoginDetails";

import "../Assets/Style/TopLevel/toplevel.css";
import Table from "./Components/Table";
const TopLevel = () => {
  const [date] = useState(new Date().getHours());
  const { isLogin,setisLogin } = useContext(LoginDetails);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin === false) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  const Greeting = useMemo(() => {
    if (date < 12) {
      return "Good Mornig";
    } else if (date >= 12 && date <= 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }, [date]);

  const LogOut = ()=>{
    navigate("/");
    setisLogin((pdata)=>{
      return !pdata;
    })

  }
  const heading=["Id","Name","Position","Sales","Level","Salary","Opt"]
  const data =[
    {
      id:"User1",
      name:"Rehan",
      position:"CEO",
      sales:2000,
      level:"top",
      salary:120000
    },
    {
      id:"User2",
      name:"Rohan",
      position:"CFO",
      sales:1500,
      level:"top",
      salary:100000
    },
    {
      id:"User2",
      name:"Rohan",
      position:"CFO",
      sales:1500,
      level:"top",
      salary:100000
    },
    {
      id:"User2",
      name:"Rohan",
      position:"CFO",
      sales:1500,
      level:"top",
      salary:100000
    },
    {
      id:"User2",
      name:"Rohan",
      position:"CFO",
      sales:1500,
      level:"top",
      salary:100000
    },
    {
      id:"User2",
      name:"Rohan",
      position:"CFO",
      sales:1500,
      level:"top",
      salary:100000
    },
    {
      id:"User2",
      name:"Rohan",
      position:"CFO",
      sales:1500,
      level:"top",
      salary:100000
    },
    {
      id:"User2",
      name:"Rohan",
      position:"CFO",
      sales:1500,
      level:"top",
      salary:100000
    }
  ]
  return (
    <React.Fragment>
      <div className="Top">
        <div className="Screen TopScreen">
          <h1 className="Heading" h1>
            Main Dashboard
          </h1>
          <div className="Greeting">
            <h2>{Greeting} Name</h2>
            <button onClick={LogOut}>Logout</button>
          </div>
          <div className="TopCards">
          <TotalValues valuename={"Sales"} value={"12"} />
          <TotalValues valuename={"Workers"} value={"8"} />
          <TotalValues valuename={"Working Employee"} value={"6"} />
          </div>
          <h2>All Employees Details</h2>
          <div className="TopTable">
            <Table heading={heading} data={data}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopLevel;
