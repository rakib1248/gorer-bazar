import { createSlice } from "@reduxjs/toolkit";
import {
  allProductLoad,
  productCreate,
  productDelete,
} from "./ProductApiSlice";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productCreate.fulfilled, (state, action) => {
        state.products = [...state.products, action.payload];
      })
      .addCase(allProductLoad.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(productDelete.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      });
  },
});

export default ProductSlice.reducer;
