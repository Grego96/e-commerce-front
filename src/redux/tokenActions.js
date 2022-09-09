import { createAction } from "@reduxjs/toolkit";

const storeToken = createAction("STORE_TOKEN");


const deleteToken = createAction("DELETE_TOKEN");

export { storeToken, deleteToken };
