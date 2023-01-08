import React, { FunctionComponent } from "react";
import { useAppDispatch } from "../hooks/custom-redux-hooks";
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined, Menu as MenuIcon, Search, SettingsOutlined } from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { Theme } from "@emotion/react";
import { setMode } from "../store/globalSlice";

const Navbar: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const theme: Theme = useTheme();

  return (
    <AppBar sx={{ position: "static", background: "none", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => console.log("open/close sidebar")}>
            <MenuIcon />
          </IconButton>

          <FlexBetween
            sx={{
              backgroundColor: theme.palette.background.alt,
              borderRadius: "9px",
              gap: "3rem",
              p: "0.1rem 1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween sx={{ gap: "1.5rem" }}>
          
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>

          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>

        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
