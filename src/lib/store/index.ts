import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import modalReducer from "./slices/modal";
import formReducer from "./slices/form";
const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    form:formReducer,
  },
});

export default store;

export const user = (state: ReturnType<typeof store.getState>) => state.user;
export const modal = (state: ReturnType<typeof store.getState>) => state.modal;
export const form = (state: ReturnType<typeof store.getState>) => state.form;
