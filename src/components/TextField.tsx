import React from 'react';

export default ({
	value,
	onChange
}: {
	value: string;
	onChange: Function;
}) => {
	return (
		<input
			value={value}
			onChange={(event) => onChange(event.target.value)}
		/>
	);
};
