import React,{useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom';

import LoginDetails from '../Context/LoginDetails';

const TopLevel = () => {
  const {isLogin}=useContext(LoginDetails);
  const navigate=useNavigate();
  const verify = ()=>{
    if (isLogin===false) {
      navigate("/");
    }

  }
  
  useEffect(()=>{
    verify()
  });
  return (
    <React.Fragment>
      <h1>Top Level</h1>
      <button>Logout</button>
    </React.Fragment>
  )
}

export default TopLevel
