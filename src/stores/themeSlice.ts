import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { themes } from '../types';

interface ThemeState {
  currentTheme: string;
}

// Get initial theme from localStorage or default to 'theme1'
const getInitialTheme = (): string => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('appTheme');
    return savedTheme && themes[savedTheme] ? savedTheme : 'theme1';
  }
  return 'theme1';
};

const initialState: ThemeState = {
  currentTheme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.currentTheme = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('appTheme', action.payload);
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;