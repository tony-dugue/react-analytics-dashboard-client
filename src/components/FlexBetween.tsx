import React, { FunctionComponent } from "react";
import { Box } from "@mui/material";

type Props = {
  children?: React.ReactNode;
  sx?: {}
};

const FlexBetween: FunctionComponent<Props> = ({ children, sx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        ...sx
      }}
    >
      {children}
    </Box>
  );
};

export default FlexBetween;

// import { Box } from "@mui/material";
// import { styled } from "@mui/system";

// const FlexBetween = styled(Box)({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
// });

// export default FlexBetween;
