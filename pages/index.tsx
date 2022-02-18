import { Container } from "@mui/material";
import type { NextPage } from "next";
import { TodoForm } from "../components/TodoForm";

import { TodosList } from "../components/TodosList";

const Home: NextPage = () => {
  return (
    <Container maxWidth="sm" sx={{ my: 2 }}>
      <TodoForm />
      <TodosList />
    </Container>
  );
};

export default Home;
