import React, { useState, FunctionComponent } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useGetUserQuery } from "../../store/services/api";
import { useAppSelector } from "../../hooks/custom-redux-hooks";

const Layout: FunctionComponent = () => {
  const isNonMobile: boolean = useMediaQuery<string>("(min-width: 600px");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const userId = useAppSelector( state => state.global.userId);

  const { data } = useGetUserQuery(userId);
  console.log("🚀 data", data)

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar 
           user={data || {}}
           isSidebarOpen={isSidebarOpen} 
           setIsSidebarOpen={setIsSidebarOpen} 
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
