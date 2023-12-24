import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    removeUser: (state) => {
      (state.isLoggedIn = false), (state.user = {});
    },
  },
});
export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
