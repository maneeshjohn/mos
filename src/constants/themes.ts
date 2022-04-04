import { constantTypes } from "../types";
import colors from "./colors";
import { defaultWallpaper } from "./images";

const defaultTheme: constantTypes.Theme = {
  colors,
  font: "Noto Sans",
  wallpaper: defaultWallpaper
};

export {
  defaultTheme
}