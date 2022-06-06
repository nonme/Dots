import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DotsBar from "./DotsBar";
import Home from "./Home";
import Projects from "./projects/Projects";
import Ideas from "./Ideas";
import { Box, CssBaseline } from "@mui/material";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#121212",

      dark: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      light: "F5F5F6",
      main: "#40FB04",
      dark: "E9EAED",
      contrastText: "#000",
    },
  },
});

const App = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleTabSelect = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        <CssBaseline />
        <DotsBar />
        <Routes>
          <Route path="*" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/ideas" element={<Ideas />} />
        </Routes>
      </DndProvider>
    </ThemeProvider>
  );
};
export default App;
