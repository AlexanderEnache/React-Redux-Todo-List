import React from 'react';
import TodoItem from './TodoItem.js';
import { connect } from 'react-redux';
import './App.css';

class Todo extends React.Component{		/* Todo App component */
	
	constructor(props){					/* Uses Props to connect Redux store */
		super(props);
		this.props = props;
		this.state = {
			input: ''
		}
	}
	
Push(e) {								/* Push new Todo */
	e.preventDefault();
	if(this.state.input){				/* Deny if there is no input */
		this.props.Add(this.state.input);	/* mapDispatch function */
		this.setState({input: ""})		/* Erase input */
		this.forceUpdate();				/* Would'nt rerender otherwise */
	}
}

Pop(e){
	this.forceUpdate();					/* Would'nt rerender otherwise */
}
	
updateInput(e) {
	this.setState({input: e.target.value})	/* Update input */
}
	
	render(){
		return(
		<div class="container">
		
			<h1 class="horizontal-center">TodoList</h1>
			
			<form onSubmit={(e) => {this.Push(e)}}>
				<input class="btn ipt" type="textbox" placeholder="New Todo" value={this.state.input} onChange={this.updateInput.bind(this)}/>
				<button class="btn submit">Submit</button>
			</form>
			<p class="invisible">_______________________</p>
			<ul onClick={(e) => {this.Pop(e)}}>
				{this.props.todo.map((todo, index) => 
					<TodoItem key={index} idx={index} rem={this.Pop.bind(this)} click={this.props.Del.bind(this)} todo={this.props.todo[index]}/>
				)}
			</ul>
			
		</div>
	)}
}

function mapState(state){				/* Pulling data from Redux store */
	console.log("state: ", state);
	return {
		todo: state.todo
	}
}

function mapDispatch(dispatch){			/* Adding data and communcation to redux store */
	return{
		Del: (idx) => {									/* Delete todo function */
			const action = {type: "del", idx: idx}
			dispatch(action);
		},
		Add: (str) => {									/* Add todo function */
			const action = {type: "add", str: str}
			dispatch(action);
		}
	}
}

export default connect(mapState, mapDispatch)(Todo);

