import React from "react";
import ListItem from "./ListItem";
export default ({ todos, deleteTodo }: { todos: string[]; deleteTodo: Function }) => {
  return (
    <ul>
      {todos.map(todo => (
        <ListItem todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};
