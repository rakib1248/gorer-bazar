import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../utils/api";
/**
 * crete product
 */
export const productCreate = createAsyncThunk(
  "product/productCreate",
  async (data) => {
    try {
      const response = await API.post("/products", data);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
/**
 * delete product
 */
export const productDelete = createAsyncThunk(
  "product/productDelete",
  async (id) => {
    try {
      await API.delete(`/products/${id}`);
      return id;
    } catch (error) {
      return error.message;
    }
  }
);

export const allProductLoad = createAsyncThunk(
  "product/allProductLoad",
  async () => {
    try {
      const response = await API.get("/products");
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
