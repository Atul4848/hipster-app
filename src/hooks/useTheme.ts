import { useSelector } from 'react-redux';
import { RootState } from '../stores';
import { themes, ThemeClasses } from '../types';

export const useTheme = (): ThemeClasses => {
  const currentThemeName = useSelector((state: RootState) => state.theme.currentTheme);
  const themeClasses = themes[currentThemeName] || themes.theme1;
  return themeClasses;
};