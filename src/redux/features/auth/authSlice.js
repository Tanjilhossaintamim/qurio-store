import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: {},
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.isLoggedIn = false;
      state.user = {};
      state.isLoading = false;
    },
  },
});
export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
