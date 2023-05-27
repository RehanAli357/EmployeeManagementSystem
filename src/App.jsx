import React,{useState} from 'react'

import AllRoutes from "./Routes/AllRoutes";
import LoginDetails from "./Context/LoginDetails";
const App = () => {
  const [uds,setuds]=useState({
    uid:"",
    upswd:"",
  })
  const [isLogin,setisLogin]=useState(false);
  return (
    <React.Fragment>
      <LoginDetails.Provider value={{uds,setuds,isLogin,setisLogin}}>
      <AllRoutes/>
      </LoginDetails.Provider>
    </React.Fragment>
  )
}

export default App
 