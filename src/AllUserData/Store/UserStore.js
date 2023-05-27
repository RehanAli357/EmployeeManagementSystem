import {configureStore} from "@reduxjs/toolkit";
import UserData from "./Slice/UserData"
const UserStore = configureStore({
    reducer:{
        user:UserData
    }
})

export default UserStore;