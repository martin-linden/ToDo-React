import React from 'react';
import styles from './styles';

export default ({
	value,
	onChange
}: {
	value: string;
	onChange: Function;
}) => {
	return (
		<input
			style={styles}
			value={value}
			onChange={(event) => onChange(event.target.value)}
		/>
	);
};
