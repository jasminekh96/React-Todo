import React from 'react';

const Todo = (props) => {
	return (
		<div>
			<div
				className={`item${props.item.completed ? ' completed ' : ''}`}
				onClick={() => props.toggleCompleted(props.item.id)}>
				<p>{props.item.name}</p>
			</div>
		</div>
	);
};
export default Todo;
