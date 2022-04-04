import { Colors } from "./constants"

export type Theme = {
  colors: Colors;
  font: string;
  wallpaper: string;
}

export type ThemeContext = {
  theme: Theme;
  setTheme: (t: Theme) => void;
}