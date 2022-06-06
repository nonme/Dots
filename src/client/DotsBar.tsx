import * as React from "react";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Grid,
  Tab,
  Tabs,
  Tooltip,
  MenuItem,
  makeStyles,
  Stack,
  styled,
} from "@mui/material";

import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { deepOrange } from "@mui/material/colors";
import { NavLink } from "react-router-dom";

const pages = ["Projects", "Ideas", "Timesheet"];

const DotsBar = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleSelectedTab = (
    event: React.ChangeEvent<HTMLInputElement>,
    newValue: number
  ) => {
    setSelectedTab(newValue);
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar variant="dense" disableGutters>
        <Grid
          container
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item>
            <Stack
              direction="row"
              sx={{
                width: "200px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PanToolAltIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                DOTS
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Box
              sx={{
                alignItems: "center",
              }}
            >
              <Tabs
                onChange={handleSelectedTab}
                value={selectedTab}
                indicatorColor="secondary"
                textColor="inherit"
              >
                {pages.map((page) => (
                  <Tab component={NavLink} to={page} label={page} key={page} />
                ))}
              </Tabs>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              width: "200px",
            }}
          >
            <Stack
              direction="row"
              sx={{
                justifyContent: "center",
              }}
            >
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenUserMenu}
                color="inherit"
              >
                <Avatar sx={{ bgcolor: deepOrange[500] }}>DL</Avatar>
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default DotsBar;
