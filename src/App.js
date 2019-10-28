import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import '../src/components/TodoComponents/Todo.css';
import { throwStatement } from '@babel/types';

const data = [
	{
		name      : 'Organize Garage',
		id        : 1528817077286,
		completed : false,
	},
	{
		name      : 'Bake Cookies',
		id        : 1528817084358,
		completed : false,
	},
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			todo : data,
		};
	}
	addItem = (name) => {
		const newItem = {
			name      : name,
			id        : Date.now(),
			completed : false,
		};
		this.setState({
			todo : [ ...this.state.todo, newItem ],
		});
	};
	setFiltered = () => {
		this.setState({
			todo : this.state.todo.filter((item) => {
				return item.completed === false;
			}),
		});
	};

	toggleCompleted = (id) => {
		this.setState({
			todo : this.state.todo.map((item) => {
				if (item.id === id) {
					return {
						...item,
						completed : !item.completed,
					};
				} else {
					return item;
				}
			}),
		});
	};

	render() {
		console.log('rendering...');
		return (
			<div className='App'>
				<div className='header'>
					<h2>ToDo List!</h2>
					<TodoForm addItem={this.addItem} />
				</div>
				<TodoList toggleCompleted={this.toggleCompleted} todo={this.state.todo} setFiltered={this.setFiltered} />
			</div>
		);
	}
}

export default App;
