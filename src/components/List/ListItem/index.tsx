import React from 'react';
import styles from './styles';
export default ({ todo }: { todo: string }) => {
	return <li style={styles}>{todo}</li>;
};
