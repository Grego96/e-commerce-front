import { createAction } from "@reduxjs/toolkit";

const add = createAction("ADD");
const remove = createAction("REMOVE");
const addAddress = createAction("ADD_ADDRESS");

export { add, remove, addAddress };
