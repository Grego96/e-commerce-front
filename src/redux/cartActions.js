import { createAction } from "@reduxjs/toolkit";

const add = createAction("ADD");
const substract = createAction("SUBSTRACT");
const addAddress = createAction("ADD_ADDRESS");

export { add, substract, addAddress };
