import { createSlice } from "@reduxjs/toolkit";
import { userList } from '../data';
import Update from "../components/update";


const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        //update
        UpdateUser:(state, action)=>{
            const {id, name, eamil, age}= action.payload;
            const uu=state.find(user=> user.id==id);
            if (uu){
                uu.name=name;
                uu.email=eamil;
                uu.age=age;
            }
        },
        //add
        addUser:(state,action)=>{
            state.push(action.payload);
        },
       //delete
        delteUser:(state,action)=>{
            const {id}= action.payload;
            return state.filter(user => user.id!=id);
        }
    },
});

export const {delteUser, addUser,UpdateUser} = userSlice.actions;
export default userSlice.reducer  
