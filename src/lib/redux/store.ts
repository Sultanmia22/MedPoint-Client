import { configureStore, type Middleware } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import { setTheme } from "./features/theme/themeSlice";

const themePersistenceMiddleware: Middleware = () => (next) => (action) => {
  const result = next(action);

  if (setTheme.match(action) && typeof window !== "undefined") {
    window.localStorage.setItem("medpoint-theme", action.payload);
    document.documentElement.setAttribute("data-theme", action.payload);
  }

  return result;
};

export const makeStore = () =>
  configureStore({
    reducer: {
      theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(themePersistenceMiddleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

