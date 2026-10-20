import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Theme = "medpoint" | "medpoint-dark";

interface ThemeState {
  current: Theme;
}

const initialState: ThemeState = {
  current: "medpoint-dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.current = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
