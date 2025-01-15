import { createSlice } from "@reduxjs/toolkit";
import { loginesuccess, phurchesUser } from "./userAuthApiSlice";

const userAuthSlice = createSlice({
  name: "userAuth",

  initialState: { user: null, phurches: [], isAuthenticated: false },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    removeFromCart: (state, action) => {
      state.phurches = state.phurches.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginesuccess.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(phurchesUser.fulfilled, (state, action) => {
        state.phurches = [...state.phurches, action.payload];
      });
  },
});

export const { logout, removeFromCart } = userAuthSlice.actions;

export default userAuthSlice.reducer;
