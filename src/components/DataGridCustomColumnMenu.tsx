import React, { FunctionComponent } from "react";
import { GridColumnMenuContainer, GridColumnMenuProps, GridFilterMenuItem, HideGridColMenuItem } from "@mui/x-data-grid";

const CustomColumnMenu: FunctionComponent<GridColumnMenuProps> = ({ hideMenu, currentColumn, open }) => {
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
      <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
