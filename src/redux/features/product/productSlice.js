import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: "",
  color: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setImageAndColor: (state, action) => {
      state.image = action.payload.image;
      state.color = action.payload.color;
    },
  },
});
export const { setImageAndColor } = productSlice.actions;

export default productSlice.reducer;
