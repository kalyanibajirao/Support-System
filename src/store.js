// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlices";
import ticketReducer from "./slices/ticketSlices";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: ticketReducer,
  },
});
