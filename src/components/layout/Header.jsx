import React, { useState, useContext } from "react";
import { Box, IconButton, Menu, MenuItem, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { useAuth } from "../hooks/Authcontext"; // Import the AuthContext hook
import { useNavigate } from "react-router-dom"; //

import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function Header() {
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { logout } = useAuth(); // Using the logout function from AuthContext

  // State for the dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Call logout function from AuthContext
    logout();
    handleClose();
  };

  const handleprofile = () => {
    // Navigate to profile route
    navigate("/profile"); // Adjust the route path as per your application
    handleClose();
  };
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" alignItems="center">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>
      </Box>

      <Box display="flex" alignItems="center" marginLeft="auto">
        <IconButton onClick={handleProfileClick}>
          <PersonOutlinedIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleprofile}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
