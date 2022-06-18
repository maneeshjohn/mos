import { useState } from "react";

import { themeTypes } from "../types";
import { defaultTheme } from "../constants";

type UseTheme = () => ({ theme: themeTypes.Theme, setTheme: (t: themeTypes.Theme) => void }); 

const useTheme: UseTheme = () => {
  const [theme, setTheme] = useState(defaultTheme);

  return { theme, setTheme };
}

export default useTheme;