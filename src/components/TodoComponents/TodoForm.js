import React from 'react';

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
				<label htmlFor='item'>New ToDo </label>
				<input
					className='words'
					type='text'
					name='item'
					id='item'
					value={this.state.newItem}
					onChange={this.handleChanges}
				/>
				<button>Add</button>
			</form>
		);
	}
}

export default TodoForm;
