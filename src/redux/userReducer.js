import { createReducer } from "@reduxjs/toolkit";
import { storeUser, deleteUser } from "./userActions";

const initialState = { value: {} };

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(storeUser, (state, action) => {
    state.value = action.payload;
  });
  builder.addCase(deleteUser, (state, action) => {
    state.value = {};
  });
});

export default userReducer;
