import { useState } from "react";

import { constantTypes } from "../types";
import { defaultTheme } from "../constants";

type UseTheme = () => ({ theme: constantTypes.Theme, setTheme: (t: constantTypes.Theme) => void })

const useTheme: UseTheme = () => {
  const [theme, setTheme] = useState<constantTypes.Theme>(defaultTheme);

  return { theme, setTheme };
}

export default useTheme;