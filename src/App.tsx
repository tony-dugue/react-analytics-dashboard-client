import React, { FunctionComponent, useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useAppSelector } from "./hooks/custom-redux-hooks";

const App: FunctionComponent = () => {
  const mode = useAppSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  )
};

export default App;
