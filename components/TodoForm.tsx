import { EventAvailable } from "@mui/icons-material";
import { Button, Card, Grid, TextField } from "@mui/material";
import React from "react";
import { Todo } from "../types/types";
import { v4 as uuid } from "uuid";

export const TodoForm = () => {
  const [todo, setTodo] = React.useState<Todo>({
    id: "",
    title: "",
    details: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();

    const {
      target: { value, name },
    } = event;

    console.log({ event, value, name });

    setTodo({ ...todo, [name]: value });
  };

  return (
    <Card elevation={2} sx={{ my: 3, padding: 3, boxShadow: 1 }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <pre> {JSON.stringify(todo, null, 2)} </pre>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="title"
            name="title"
            type="text"
            margin="normal"
            value={todo.title}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="details"
            name="details"
            type="text"
            margin="normal"
            multiline
            maxRows={4}
            value={todo.details}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" sx={{ mt: 3 }}>
            Add a new to-do
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};
