import React from 'react';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { TodoItem } from '../../../models/TodoItem';

export default ({
	todo,
	deleteTodo
}: {
	todo: TodoItem;
	deleteTodo: Function;
}) => {
	return (
		<li
			onClick={() => deleteTodo(todo.id)}
			className="list-item-hover"
			style={styles.listItem}
		>
			<FontAwesomeIcon
				style={styles.icon}
				size={'xs'}
				icon={faCheck}
			/>
			{todo.value}
		</li>
	);
};
