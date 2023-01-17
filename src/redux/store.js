import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./recipe";
// import { setupListeners } from "@reduxjs/toolkit/query";
import { recipeApi } from "../components/Api/recipeApi";

//state를 관리하는 곳
export const store = configureStore({
  reducer: {
    [recipeApi.reducerPath]: recipeApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipeApi.middleware),
});

// setupListeners(store.dispatch);

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
