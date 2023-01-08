import React, { FunctionComponent } from "react";

type Props = {
  isNonMobile: boolean;
  drawerWidth: string;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: FunctionComponent<Props> = ({ isNonMobile, drawerWidth, isSidebarOpen, setIsSidebarOpen }) => {
  return <div>Sidebar</div>;
};

export default Sidebar;
