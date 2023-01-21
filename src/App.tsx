import React, { FunctionComponent, useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useAppSelector } from "./hooks/custom-redux-hooks";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
import Products from "./scenes/products";
import Customers from "./scenes/customers";
<<<<<<< HEAD
import Transactions from "./scenes/transactions";
import Geography from "./scenes/geography";
=======
>>>>>>> parent of e32dabd (Added Transactions page content with datatable + server-side pagination & custom toolbar)

const App: FunctionComponent = () => {
  const mode = useAppSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
<<<<<<< HEAD
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
=======
>>>>>>> parent of e32dabd (Added Transactions page content with datatable + server-side pagination & custom toolbar)
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
