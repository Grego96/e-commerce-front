import { createAction } from "@reduxjs/toolkit";

const add = createAction("ADD");
const substract = createAction("SUBSTRACT");
const addAddress = createAction("ADD_ADDRESS");
const remove = createAction("REMOVE");

export { add, substract, addAddress, remove };
