import React from 'react';
import styles from './styles';

export default ({ onClick }: { onClick: Function }) => {
	return (
		<button style={styles} onClick={() => onClick()}>
			Add ToDo
		</button>
	);
};
