import { createContext } from "react";
import { ThemeProvider } from "styled-components";

import { useTheme } from "../hooks";
import { contextTypes } from "../types";
import { defaultTheme } from "../constants";

export const { Consumer, Provider } = createContext<contextTypes.ThemeContext>({
  theme: defaultTheme,
  setTheme: () => {}
});

const AppThemeProvider: React.FC = ({ children }) => {

  const { theme, setTheme } = useTheme();

  return(
    <Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Provider>
  );
}