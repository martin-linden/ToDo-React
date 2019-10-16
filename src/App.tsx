import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button';
import TextField from './components/TextField';

const App: React.FC = () => {
	// Håller state för vår todo-lista,
	// I detta fall en array av strängar
	// todos är vår variabel, setTodos är funktionen som uppdaterar todos
	const [ todos, setTodos ] = useState<string[]>([
		'Laundry',
		'Cooking'
	]);

	// Håller state för textfielden, både en variabel och en funktion
	// som ändrar variablen
	const [ textField, setTextField ] = useState();

	// En funktion som hanterar knapptryckningen
	const handleClick = () => {
		setTodos([ ...todos, textField ]);
		setTextField('');
	};

	// Return renderar allt som kommer upp på skärmen
	return (
		<div className="App">
			<TextField value={textField} onChange={setTextField} />
			<Button onClick={handleClick} />
			<ul>{todos.map((todo) => <li>{todo}</li>)}</ul>
		</div>
	);
};

export default App;
