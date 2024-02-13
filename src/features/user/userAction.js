
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Utils/axiosConfig";

export const registerUser = createAsyncThunk(
    "/registerUser",
    async ({ username,email,password }, { rejectWithValue }) => {
      try {
      
        const register = await api.post(
          "/user/register",
          { username,email,password }
        );
        console.log(register);
        return register;
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        }
      }
    }
  );


  export const userLogin = createAsyncThunk(
    '/login',
    async({email,password},{rejectWithValue})=>{
      try{
      
        const {data} = await api.post(
          "/user/login",
          {email,password}
        )
        
        const accessToken = data.accessToken;
        
        localStorage.setItem('token',accessToken)
        
      }catch (error){
        if(error.response && error.response.data.message){
          return rejectWithValue(error.response.data.message)
        }else{
          return rejectWithValue(error.message)
        }
      }
    }
  )