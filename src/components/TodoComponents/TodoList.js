// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const Buttons = styled.button`
	background: #2f4f4f;
	color: white;
	font-size: 1.5rem;
	border-radius: 30px;
	padding: 8px;
	font-family: 'Amatic SC', cursive;
	margin-top: 20px;
`;

const TodoList = (props) => {
	return (
		<div className='todo-list'>
			{props.todo.map((item) => <Todo key={item.id} item={item} toggleCompleted={props.toggleCompleted} />)}
			<Buttons className='clear-btn' onClick={props.setFiltered}>
				YAY You did it! Clear it out now!
			</Buttons>
		</div>
	);
};
export default TodoList;
