import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Button from "./components/Button/";
import TextField from "./components/TextField/";
import List from "./components/List";

const App: React.FC = () => {
  // Håller state för vår todo-lista,
  // I detta fall en array av strängar
  // todos är vår variabel, setTodos är funktionen som uppdaterar todos
  const [todos, setTodos] = useState<string[]>(["Laundry", "Cooking"]);

  // Håller state för textfielden, både en variabel och en funktion
  // som ändrar variablen
  const [textField, setTextField] = useState();

  // En funktion som hanterar knapptryckningen
  const handleClick = () => {
    setTodos([...todos, textField]);
    setTextField("");
  };

  // Skapar en ny tom lista
  // Fyller denna tomma lista med vartenda todo
  // FÖRUTOM den vi vill ta bort
  // Lägger till den nya listan i den gamla
  // Todon vi vill ha bortplockad är ej med i den nya
  // E.g borttagen
  const deleteTodo = (todoToRemove: string) => {
    // Skapar ny lista, filtrerar
    const newTodo = todos.filter(todo => {
      // Kollar så att den vi vill ta bort inte
      // matchar nuvarande todo
      // Skickar tillbaks till den nya listan
      if (todoToRemove !== todo) return todo;
      // Om det är den todo vi vill ta bort, gör ingenting
      // Så läggs den inte med i den nya listan
    });
    // Fyll staten med den nya listan
    setTodos([...newTodo]);
  };

  // Return renderar allt som kommer upp på skärmen
  return (
    <div className="App">
      <TextField value={textField} onChange={setTextField} onClick={handleClick} />
      <Button onClick={handleClick} />
      <List todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
