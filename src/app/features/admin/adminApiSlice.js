import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../utils/api";

/**
 * Admin loginesuccess
 */
export const AdminLoginesuccess = createAsyncThunk(
  "admin/AdminLoginesuccess",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.get("/admin/1");

      if (response.data) {
        return response.data;
      } else {
        return rejectWithValue("Invalid email or password");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
