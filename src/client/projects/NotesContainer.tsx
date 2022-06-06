import {
  AppBar,
  Box,
  Fab,
  Fade,
  Toolbar,
  Typography,
  Zoom,
} from "@mui/material";
import * as React from "react";
import { Droppable } from "react-beautiful-dnd";

import AddIcon from "@mui/icons-material/Add";

import { NoteCategory, Note } from "./NotesContext";
import { NotesCard } from "./NotesCard";

type Props = {
  type: NoteCategory;
  color: string;
  data: Array<Note>;
};

export const NotesContainer: React.FC<Props> = React.memo(
  function NotesContainer({ type, color, data }) {
    const [addButton, setAddButton] = React.useState(false);
    const handleMouseHover = () => {
      setAddButton(!addButton);
    };

    return (
      <Box sx={{ mt: 5, ml: 5 }}>
        <AppBar
          position="static"
          style={{ background: color }}
          sx={{
            borderRadius: 1,
          }}
        >
          <Toolbar variant="dense">
            <Typography sx={{ flexGrow: 1 }}>
              {type.name} ({data.length})
            </Typography>
          </Toolbar>
        </AppBar>
        <Droppable droppableId={`droppable-${type.id}`}>
          {(provided) => (
            <Box
              {...provided.droppableProps}
              ref={provided.innerRef}
              sx={{
                height: "400px",
              }}
            >
              {data.map((note, index) => {
                return (
                  <NotesCard
                    key={note.id}
                    note={note}
                    index={index}
                    color={color}
                  />
                );
              })}
              {provided.placeholder}
              <Box
                sx={{ height: "100px" }}
                onMouseEnter={handleMouseHover}
                onMouseLeave={handleMouseHover}
              >
                <Zoom in={addButton}>
                  <Box
                    textAlign="center"
                    sx={{
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <Fab
                      size="small"
                      color="primary"
                      aria-label="add"
                      sx={{
                        ml: "auto",
                        mt: 2,
                      }}
                    >
                      <AddIcon sx={{ ml: "auto", mr: "auto" }} />
                    </Fab>
                  </Box>
                </Zoom>
              </Box>
            </Box>
          )}
        </Droppable>
      </Box>
    );
  }
);
