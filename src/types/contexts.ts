import { Theme } from "./constants";

export type ThemeContext = {
  theme: Theme;
  setTheme: (t: Theme) => void;
}