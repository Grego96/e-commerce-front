import { createReducer } from "@reduxjs/toolkit";
import { add, substract, addAddress } from "./cartActions";

const initialState = {
  value: {
    product_json: [],
    payment_method: "",
    address: "",
    city: "",
    country: "",
    phone_number: "",
    postal_code: "",
  },
};

const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase(add, (state, action) => {
    const product = state.value.product_json.find((p) => p.product.id === action.payload.id);
    if (product) {
      product.quantity++;
    } else {
      state.value.product_json.push({
        quantity: 1,
        product: action.payload,
      });
    }
  });

  builder.addCase(addAddress, (state, action) => {
    state.value.address = action.payload.address;
    state.value.city = action.payload.city;
    state.value.country = action.payload.country;
    state.value.phone_number = action.payload.phone_number;
    state.value.postal_code = action.payload.postal_code;
  });

  builder.addCase(substract, (state, action) => {
    const product = state.value.product_json.find((p, i) => p.product.id === action.payload.id);
    if (product.quantity > 1) {
      product.quantity--;
    } else {
      // product.slice(i,1)
      const newCart = state.value.product_json.filter((p) => p.product.id !== action.payload.id);
      state.value.product_json = newCart;
    }
  });
});

export default cartReducer;
