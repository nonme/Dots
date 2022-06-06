import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  IconButton,
  Typography,
  Fade,
  TextField,
  CardActionArea,
  Slide,
  Chip,
  Badge,
} from "@mui/material";
import * as React from "react";
import type { CSSProperties, FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import { NoteCategory, Note } from "./NotesContext";

import { ExpandMore } from "../utility/components/ExpandMore";

import BugReportIcon from "@mui/icons-material/BugReport";
import FeedIcon from "@mui/icons-material/Feed";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import AlarmIcon from "@mui/icons-material/Alarm";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

import { red } from "@mui/material/colors";

type Props = {
  note: Note;
  color: string;
  index: number;
};

export const NotesCard: FC<Props> = React.memo(function NotesCard({
  note,
  color,
  index,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [closeFaded, setCloseFaded] = React.useState(false);

  const handleCloseFade = () => {
    setCloseFaded(!closeFaded);
  };

  const [name, setName] = React.useState(note.name);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 30) setName(event.target.value);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let icon = <BugReportIcon />;
  if (note.type == "NEW") icon = <FeedIcon />;
  else if (note.type == "REDO") icon = <AutorenewIcon />;

  return (
    <Draggable draggableId={`draggable-${note.id}`} index={index} key={note.id}>
      {(provided, snapshot) => {
        return (
          <Card
            onMouseEnter={handleCloseFade}
            onMouseLeave={handleCloseFade}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            sx={{
              mt: 2,
              opacity: 1,
              cursor: "grab",
            }}
            elevation={2}
          >
            <CardHeader
              action={
                <Fade in={closeFaded}>
                  <IconButton aria-label="close">
                    <CloseIcon
                      sx={{
                        color: "#FFFFFF",
                        fontSize: 20,
                      }}
                    />
                  </IconButton>
                </Fade>
              }
              avatar={
                <Avatar sx={{ width: 30, height: 30, bgcolor: color }}>
                  {icon}
                </Avatar>
              }
              title={name}
              titleTypographyProps={{ variant: "body1" }}
              sx={{
                background: "#121212",
                height: "60px",
                color: "white",
              }}
            />
            <CardActionArea>
              <Collapse in={closeFaded} collapsedSize={70}>
                <CardContent
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <Typography
                    variant="body2"
                    style={{ whiteSpace: "pre-line" }}
                    color="text.secondary"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      "-webkit-line-clamp": 2,
                      "-webkit-box-orient": "vertical",
                    }}
                  >
                    {note.data}
                  </Typography>
                </CardContent>
              </Collapse>
            </CardActionArea>
            <Divider />
            <CardActions
              disableSpacing
              sx={{
                height: "40px",
              }}
            >
              {note.deadline && (
                <IconButton>
                  <AlarmIcon
                    sx={{
                      fontSize: 20,
                    }}
                  />
                </IconButton>
              )}
              {note.deadline && (
                <Fade in={closeFaded}>
                  <Typography variant="subtitle2" color="text.secondary">
                    {note.deadline.toISOString().substring(0, 10)}
                  </Typography>
                </Fade>
              )}
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{
                  ml: "auto",
                  mr: 1,
                }}
              >
                {note.points} p
              </Typography>
            </CardActions>
          </Card>
        );
      }}
    </Draggable>
  );
});
