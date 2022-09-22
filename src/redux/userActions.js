import { createAction } from "@reduxjs/toolkit";

const storeUser = createAction("STORE_USER");
const deleteUser = createAction("DELETE_USER")

export { storeUser, deleteUser };
