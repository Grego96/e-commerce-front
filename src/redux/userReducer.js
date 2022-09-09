import { createReducer } from "@reduxjs/toolkit";
import { storeUser } from "./userActions";

const initialState = { value: {} };

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(storeUser, (state, action) => {
    state.value = action.payload;
  });
});

export default userReducer;