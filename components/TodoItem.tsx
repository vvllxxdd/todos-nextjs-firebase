import { ListItem, ListItemText } from "@mui/material";
import moment from "moment";
import React from "react";

import { Todo } from "../types/types";

interface TodoItemPropType {
  todo: Todo;
}

export const TodoItem = ({
  todo: { id, title, details, timestamp },
}: TodoItemPropType) => {
  return (
    <ListItem
      sx={{ mt: 3, boxShadow: 1 }}
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <ListItemText
        primary={title}
        secondary={moment(timestamp).format("dd MM yyyy")}
      />
    </ListItem>
  );
};
