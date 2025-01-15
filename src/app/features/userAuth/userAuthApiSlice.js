import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../utils/api";
import { alertToster } from "../../../utils/helper";
import Swal from "sweetalert2";
// import { alertToster } from "../../../utils/helper";

/**
 * create User Data
 */
export const userAuthCreate = createAsyncThunk(
  "userAuth/userAuthCreate",
  async (data) => {
    try {
      const response = await API.post("/users", data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Hello ${data.name} create successfully!`,
        showConfirmButton: false,
        timer: 3000,
      });

      return response.data;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      return error.message;
    }
  }
);
/**
 * Loade user data
 */
export const AlluserLode = createAsyncThunk(
  "userAuth/AlluserLode",
  async () => {
    try {
      await API.get("/users");
    } catch (error) {
      return error.message;
    }
  }
);

/**
 * loginesuccess
 */
export const loginesuccess = createAsyncThunk(
  "userAuth/loginesuccess",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.get("/users");
      const user = response.data.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (user) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Hello ${user.name} you Are Logine successfully!`,
          showConfirmButton: false,
          timer: 3000,
        });
        return user;
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid email or password. Please try again!",
        });
        return rejectWithValue("Invalid email or password");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again later!",
      });

      return rejectWithValue(error.message);
    }
  }
);

/**
 * phurches user data
 */
export const phurchesUser = createAsyncThunk(
  "userAuth/phurchesUser",
  async (id) => {
    try {
      const response = await API.get(`/products/${id}`);

      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
