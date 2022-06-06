import { Divider, Fab, Grid, Typography } from "@mui/material";
import * as React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { NotesContainer } from "./NotesContainer";

import { red, purple, blue, green } from "@mui/material/colors";
import { addToList, removeFromList } from "../utility";

import AddIcon from "@mui/icons-material/Add";

export type NoteCategory = {
  id: number;
  name: string;
};

export type NoteType = "BUG" | "NEW" | "REDO";

export type Note = {
  id: number;
  type: NoteType;
  name: string;
  data: string;
  category: NoteCategory;
  deadline: Date | null;
  points: number;
};

const mockCathegories: Array<NoteCategory> = [
  {
    id: 0,
    name: "To Do",
  },
  {
    id: 1,
    name: "In Progress",
  },
  {
    id: 2,
    name: "On Review",
  },
  {
    id: 3,
    name: "Done",
  },
];

const mockNotes: Array<Array<Note>> = [
  [
    {
      id: 0,
      type: "NEW",
      name: "UI for Ideas",
      data: "Design and code a new UI for Ideas section",
      category: mockCathegories[0],
      deadline: null,
      points: 12,
    },
    {
      id: 1,
      type: "REDO",
      name: "UI for Projects",
      data: "Redo a Projects section with adding a project selection functional",
      category: mockCathegories[0],
      deadline: new Date("2022-06-08"),
      points: 24,
    },
    {
      id: 2,
      type: "NEW",
      name: "Backend for Projects",
      data: `Put data in database, fetch it from server and and display. 
      Don't forget to replace the mock data.`,
      category: mockCathegories[0],
      deadline: null,
      points: 12,
    },
    {
      id: 3,
      type: "BUG",
      name: "Fix a bug",
      data: "We can fix these bugs but..",
      category: mockCathegories[0],
      deadline: null,
      points: 1,
    },
  ],
  [
    {
      id: 4,
      type: "NEW",
      name: "UI for project seleciton",
      data: "Design and code UI for project selection",
      category: mockCathegories[1],
      deadline: new Date("2022-06-10"),
      points: 4,
    },
  ],
  [
    {
      id: 5,
      type: "NEW",
      name: "UI for navbar",
      data: "Design and code UI for navbar, use AppBar from mui",
      category: mockCathegories[2],
      deadline: null,
      points: 6,
    },
  ],
  [
    {
      id: 6,
      type: "NEW",
      name: "Implement Drag and Drop",
      data: "Use react-beatiful-dnd or other library to drag and drop notes between the lists",
      category: mockCathegories[3],
      deadline: new Date("2022-07-01"),
      points: 8,
    },
  ],
];

type ContextProps = {};

let colors = [red[600], blue[600], purple[600], green[600]];

export const NotesContext: React.FC<ContextProps> = React.memo(
  function NotesContext({}) {
    const [notes, setNotes] = React.useState(mockNotes);

    const onDragEnd = (result: DropResult) => {
      if (!result.destination) {
        return;
      }
      const listCopy = [...notes];

      const sourceTypeId = Number(result.source.droppableId.match(/\d+/));
      const sourceIndex = result.source.index;
      const sourceList = listCopy[sourceTypeId];
      const [removedElement, newSourceList] = removeFromList(
        sourceList,
        sourceIndex
      );
      listCopy[sourceTypeId] = newSourceList;

      const destinationTypeId = Number(
        result.destination.droppableId.match(/\d+/)
      );
      const destinationIndex = result.destination.index;
      const destinationList = listCopy[destinationTypeId];
      listCopy[destinationTypeId] = addToList(
        destinationList,
        destinationIndex,
        removedElement
      );

      console.log(listCopy);
      setNotes(listCopy);
    };

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container columns={16}>
          {notes.map((notesList, index) => (
            <Grid item xs={3} key={mockCathegories[index].id}>
              <NotesContainer
                key={mockCathegories[index].id}
                type={mockCathegories[index]}
                color={colors[index]}
                data={notesList}
              />
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
    );
  }
);
