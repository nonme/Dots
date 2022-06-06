import * as React from "react";
import { Tab, Link } from "@mui/material";

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component={Link}
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default LinkTab;
