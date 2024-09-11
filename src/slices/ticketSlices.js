// src/slices/ticketSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
};

const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    createTicket(state, action) {
      state.tickets.push(action.payload);
    },
    updateTicket(state, action) {
      const index = state.tickets.findIndex(
        (ticket) => ticket.id === action.payload.id
      );
      if (index >= 0) {
        state.tickets[index] = action.payload;
      }
    },
    closeTicket(state, action) {
      const index = state.tickets.findIndex(
        (ticket) => ticket.id === action.payload
      );
      if (index >= 0) {
        state.tickets[index].status = "closed";
      }
    },
  },
});

export const { createTicket, updateTicket, closeTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
