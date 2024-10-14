import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from "notiflix";

Notiflix.Notify.init({
  width: "280px",
  position: "center-center",
  distance: "10px",
  opacity: 1,
});

axios.defaults.baseURL = "http://localhost:2000";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

const saveTokenToLocalStorage = (token) => {
  localStorage.setItem("token", token);
};

const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("token");
};

const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/register", credentials);

      if (res.status === 201) {
        const token = res.data.data.token;
        const name = res.data.data.user.name;

        saveTokenToLocalStorage(token);
        setAuthHeader(token);

        Notiflix.Notify.success(`Welcome, ${name.toUpperCase()}!`);
      }

      return res.data;
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.status === 400) {
        Notiflix.Notify.failure("Signup failed. Please try again.");
      } else if (error.response && error.response.status === 409) {
        Notiflix.Notify.failure("Email already exists. Please sign in.");
      } else {
        Notiflix.Notify.failure("Unexpected error. Please try again later.");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/login", credentials);

      if (res.status === 200) {
        const token = res.data.data.token;

        saveTokenToLocalStorage(token);
        setAuthHeader(token);

        Notiflix.Notify.success(
          `Welcome, ${res.data.data.user.name.toUpperCase()}!`
        );
      }

      return res.data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Notiflix.Notify.failure("Signin failed. Please try again.");
      } else if (error.response && error.response.status === 403) {
        Notiflix.Notify.failure("Password is incorrect. Please try again.");
      } else if (error.response && error.response.status === 404) {
        Notiflix.Notify.failure("Email not found. Please sign up.");
      } else {
        Notiflix.Notify.failure("Unexpected error. Please try again.");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/auth/logout");

    if (res.status === 200) {
      Notiflix.Notify.info("You have successfully logged out.");

      removeTokenFromLocalStorage();
      clearAuthHeader();
    }

    return res.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      Notiflix.Notify.failure(
        "Logout endpoint not found. Please try again later."
      );
    } else if (error.response && error.response.status === 401) {
      Notiflix.Notify.failure("Bearer authentication failed.");
    } else {
      Notiflix.Notify.failure("Logout failed. Please try again.");
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

const token = getTokenFromLocalStorage();
if (token) {
  setAuthHeader(token);
}
