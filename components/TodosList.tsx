import React, { useEffect, useState } from "react";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { Todo } from "../types/types";
import { TodoItem } from "./TodoItem";

export const TodosList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const collectionRef = collection(db, "todos");
    const dbQuery = query(collectionRef, orderBy("timestamp", "desc"));

    const unsuscribe = onSnapshot(dbQuery, (querySnapshot) => {
      setTodos(
        querySnapshot.docs.map(
          (doc) =>
            ({
              ...doc.data(),
              id: doc.id,
              timestamp: doc.data().timestamp.toDate().getTime(),
            } as Todo)
        )
      );
    });
    return unsuscribe;
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
