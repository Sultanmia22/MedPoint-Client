"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Provider } from "react-redux";
import { useAppDispatch } from "@/lib/redux/hooks";
import { makeStore } from "@/lib/redux/store";
import { setTheme, type Theme } from "@/lib/redux/features/theme/themeSlice";

const THEME_STORAGE_KEY = "medpoint-theme";

const isTheme = (value: string | null): value is Theme =>
  value === "medpoint" || value === "medpoint-dark";

const ThemeSync = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (isTheme(savedTheme)) {
      dispatch(setTheme(savedTheme));
    } else {
      document.documentElement.setAttribute("data-theme", "medpoint-dark");
    }
  }, [dispatch]);

  return children;
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [store] = useState(makeStore);

  return (
    <Provider store={store}>
      <ThemeSync>{children}</ThemeSync>
    </Provider>
  );
};

export default ThemeProvider;
