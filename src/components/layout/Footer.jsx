import React, { useContext } from "react";
import { Box, Typography, Link, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
const Footer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { toggleColorMode } = useContext(ColorModeContext);

  const handleColorModeToggle = () => {
    toggleColorMode();
  };

  return (
    <Box
      sx={{
        backgroundColor: "",
        color: colors.grey[100],
        padding: "20px",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <Typography variant="body2">
        it's just an assignment using Context API for design, not going deeply
        into functionality.
      </Typography>
      <Typography variant="body2">
        © {new Date().getFullYear()} Alihasan
      </Typography>
      <Typography variant="body2">
        <Link href="/" color="inherit">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="/" color="inherit">
          Terms of Service
        </Link>
      </Typography>
      <button onClick={handleColorModeToggle}>Toggle Color Mode</button>{" "}
    </Box>
  );
};

export default Footer;
