import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,

    },
    middleware: (getDefaultMiddleware) => {

    }
});

export default store