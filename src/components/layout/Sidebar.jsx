import React from "react";
import { Sidebar as MySidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setCollapsed] = React.useState(false);
  const [selected, setSelected] = React.useState("dashboard");

  return (
    <Box
      className="sidebar"
      sx={{
        height: "100vh",
      }}
    >
      <MySidebar collapsed={isCollapsed} backgroundColor={colors.primary[400]}>
        <Menu
          iconShape="square"
          menuItemStyles={{
            button: {
              [`&:hover`]: {
                backgroundColor: colors.blueAccent[300],
              },
              [`&.active`]: {
                backgroundColor: "#fff",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <MenuItem
            onClick={() => setCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0px 20px 0px",
              color: colors.grey[700],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                {/* Your user image goes here */}
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Admin
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="400"
                  color={colors.greenAccent[500]}
                >
                  Admin
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0px 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/User"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Commingsoon"
              to="/"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Commingsoon"
              to="/"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0px 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/Profile"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0px 5px 20px" }}
            ></Typography>
            <Item
              title=""
              to="/"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title=""
              to="/"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title=""
              to="/"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title=""
              to="/"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title=""
              to="/"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title=""
              to="/"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title=""
              to="/"
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </MySidebar>
    </Box>
  );
}

export default Sidebar;
