import { toast } from "react-toastify";
import ApiService from "../../service/ApiService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const api = new ApiService();

export const getUsers = createAsyncThunk("/users", async () => {
  try {
    const users = await api.getWithToken("/users");
    return users;
  } catch (error) {
    toast.error("Couldn't get users");
    throw error;
  }
});

export const fetchUserData = createAsyncThunk("fetchUserData", async () => {
  try {
    const user = await api.getWithToken("/profile");
    return user;
  } catch (error) {
    toast.error("Failed to fetch user profile");
    throw error;
  }
});

const userSlice = createSlice({
  name: "User",
  initialState: {
    profile: null,
    users: null,
    error: null,
    selectedUser: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
