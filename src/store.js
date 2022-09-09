import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./redux/tokenReducer";
import userReducer from "./redux/userReducer";

export const store = configureStore({
  reducer: { token: tokenReducer, user: userReducer },
});
