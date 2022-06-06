import update from "react-addons-update";

import {
  Grid,
  Tabs,
  Tab,
  Box,
  Drawer,
  Toolbar,
  IconButton,
  Button,
  Divider,
  Typography,
  Collapse,
  Zoom,
  Fab,
} from "@mui/material";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";

import { DragDropContext } from "react-beautiful-dnd";

import { NotesContext } from "./NotesContext";

const mockData = [
  {
    id: 0,
    name: "TerrainJS",
  },
  {
    id: 1,
    name: "Dots",
  },
  {
    id: 2,
    name: "Dota 2",
  },
];

const drawerWidth = 200;

const Projects = () => {
  const [mouseOnButton, setMouseOnButton] = React.useState(false);
  const handleMouseOnButton = () => {
    setMouseOnButton(!mouseOnButton);
  };

  const [selectedProject, setSelectedProject] = React.useState(0);
  const handleProjectChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    newValue: number
  ) => {
    setSelectedProject(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Typography sx={{ ml: "auto", mr: "auto", mt: 1, mb: 1 }} variant="h5">
          My Boards
        </Typography>
        <Divider />
        <Tabs
          onChange={handleProjectChange}
          value={selectedProject}
          indicatorColor="primary"
          textColor="inherit"
          orientation="vertical"
        >
          {mockData.map((data) => (
            <Tab label={data.name} key={data.id} />
          ))}
        </Tabs>
        <Divider />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            ml: 3,
            mr: 3,
            mt: 1,
            backgroundColor: "primary.main",
          }}
        >
          New Board
        </Button>
      </Drawer>
      <NotesContext />
    </Box>
  );
};
export default Projects;
