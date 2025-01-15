import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./features/userAuth/userAuthSlice";
import addminReducer from "./features/admin/adminSlice";
import productreducer from "./features/Product/ProductSlice";

const store = configureStore({
  reducer: {
    Auth: userAuthReducer,
    Admin: addminReducer,
    product: productreducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
