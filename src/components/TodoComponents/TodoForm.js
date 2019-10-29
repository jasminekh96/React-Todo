import React from 'react';
import styled from 'styled-components';

const Buttons = styled.button`
	background: #2f4f4f;
	color: white;
	font-size: 1.5rem;
	border-radius: 10px;
	padding: 5px;
	margin-left: 10px;
	font-family: 'Amatic SC', cursive;
`;
const Labels = styled.label`color: pink;`;

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			newItem : '',
		};
	}
	handleChanges = (e) => {
		this.setState({
			newItem : e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log('its working');
		this.props.addItem(this.state.newItem);
		this.setState({ newItem: '' });
	};
	render() {
		console.log('rendering form');
		return (
			<form onSubmit={this.handleSubmit}>
				<Labels htmlFor='item'>New ToDo </Labels>
				<input
					className='words'
					type='text'
					name='item'
					id='item'
					placeholder='New Item'
					value={this.state.newItem}
					onChange={this.handleChanges}
				/>
				<Buttons> Add </Buttons>
			</form>
		);
	}
}

export default TodoForm;
