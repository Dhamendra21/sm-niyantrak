import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../actions/authActions";

export const asyncRegisterUser = createAsyncThunk(
  "/api/auth/register",
  async ({ fullname, email, password }, { rejectWithValue }) => {
    try {
      const response = await registerUser(fullname, email, password);
      console.log(response);
      return response;
      
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Registration failed. Please try again."
      );
    }
  }
);

export const asyncLoginUser = createAsyncThunk(
  "/api/auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await loginUser(email, password);
     console.log(response);
     
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Login failed. Please try again."
      );
    }
  }
);


const authslice = createSlice({
    name : "auth",
    
})
