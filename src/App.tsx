import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button/';
import TextField from './components/TextField/';
import List from './components/List';
import { TodoRepo } from './repositories';
import { TodoItem } from './models/TodoItem';

const App: React.FC = () => {
	// Håller state för vår todo-lista,
	// I detta fall en array av strängar
	// todos är vår variabel, setTodos är funktionen som uppdaterar todos
	const [ todos, setTodos ] = useState<TodoItem[]>([]);

	// Håller state för textfielden, både en variabel och en funktion
	// som ändrar variablen
	const [ textField, setTextField ] = useState();

	useEffect(() => {
		GetAllTodos();
	}, []);

	// En funktion som hanterar knapptryckningen
	const handleClick = () => {
		if (textField == '' || !textField) return;
		TodoRepo.AddNewTodo(textField).then(() => GetAllTodos());
		setTextField('');
	};

	const GetAllTodos = () => {
		TodoRepo.GetAllTodos().then((todos) => {
			setTodos(todos);
		});
	};

	const deleteTodo = (todoToRemove: string) =>
		TodoRepo.RemoveTodoById(todoToRemove).then(() => GetAllTodos());

	// Return renderar allt som kommer upp på skärmen
	return (
		<div className="App">
			<TextField
				value={textField}
				onChange={setTextField}
				onClick={handleClick}
			/>
			<Button onClick={handleClick} />
			<List todos={todos} deleteTodo={deleteTodo} />
		</div>
	);
};

export default App;
