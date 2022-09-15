import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./redux/tokenReducer";
import userReducer from "./redux/userReducer";
import cartReducer from "./redux/cartReducer";

export const store = configureStore({
  reducer: { token: tokenReducer, user: userReducer, cart: cartReducer },
});
