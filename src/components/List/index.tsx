import React from 'react';
import ListItem from './ListItem';
import { TodoItem } from '../../models/TodoItem';
export default ({
	todos,
	deleteTodo
}: {
	todos: TodoItem[];
	deleteTodo: Function;
}) => {
	return (
		<ul>
			{todos.map((todo) => (
				<ListItem todo={todo} deleteTodo={deleteTodo} />
			))}
		</ul>
	);
};
