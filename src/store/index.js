import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/UserSlice.js";

const store = configureStore({
    reducer: {
        users: userReducer,
    }
});

export default store;
export * from "./thunks/fetchUsers.js";
export * from "./thunks/addUser.js";
export * from "./thunks/deleteUser.js";
// which try to fetch all exports and export them from store/index.js file