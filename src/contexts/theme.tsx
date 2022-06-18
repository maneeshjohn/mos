import { createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";

import { useTheme } from "../hooks";
import { themeTypes } from "../types";
import { defaultTheme } from "../constants";

const AppThemeContext = createContext<themeTypes.ThemeContext>({
  theme: defaultTheme,
  setTheme: () => {}
});

const AppThemeProvider: React.FC = ({ children }) => {

  const { theme, setTheme } = useTheme();

  return(
    <AppThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}

const useCurrentTheme = () => useContext(AppThemeContext).theme;

const useChangeTheme = () => useContext(AppThemeContext).setTheme;

export { 
  AppThemeProvider,
  AppThemeContext,
  useCurrentTheme,
  useChangeTheme
}