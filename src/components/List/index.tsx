import React from 'react';
import ListItem from './ListItem';
export default ({ todos }: { todos: string[] }) => {
	return <ul>{todos.map((todo) => <ListItem todo={todo} />)}</ul>;
};
