import React from 'react';

export default ({ onClick }: { onClick: Function }) => {
	return <button onClick={() => onClick()}>Add ToDo</button>;
};
