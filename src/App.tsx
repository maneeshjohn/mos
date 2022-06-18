import React from "react";

import { AppThemeProvider } from "./contexts/theme";

import Desktop from "./components/process/Desktop";

function App() {
  return (
    <AppThemeProvider>
      <Desktop />
    </AppThemeProvider>
  );
}

export default App;
