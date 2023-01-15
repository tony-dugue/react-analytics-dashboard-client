import React, { FunctionComponent } from "react";
import { Theme } from "@emotion/react";
import { Box, Typography, useTheme } from "@mui/material";

type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header: FunctionComponent<HeaderProps> = ({ title, subtitle }) => {
  const theme: Theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>

      <Typography variant="h5" color={theme.palette.secondary[300]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
