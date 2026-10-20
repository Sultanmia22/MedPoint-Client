"use client";

import { Moon, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setTheme } from "@/lib/redux/features/theme/themeSlice";

const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.current);
  const isDark = theme === "medpoint-dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      onClick={() =>
        dispatch(setTheme(isDark ? "medpoint" : "medpoint-dark"))
      }
      className="flex h-10 w-10 items-center justify-center rounded-full text-base-content transition-colors hover:bg-base-200"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
