import { createSlice } from "@reduxjs/toolkit";

import { AdminLoginesuccess } from "./adminApiSlice";

const adminSlice = createSlice({
  name: "admin",

  initialState: { user: null, adminAuthenticated: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AdminLoginesuccess.fulfilled, (state, action) => {
      state.user = action.payload;
      state.adminAuthenticated = true;
    });
  },
});
export default adminSlice.reducer;
