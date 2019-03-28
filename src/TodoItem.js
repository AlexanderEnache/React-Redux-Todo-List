import React from 'react';

function TodoItem(props){
	return (
		<li>
			<span>{props.todo}</span> 
			<button class="btn close" onClick={(e) => {props.click(props.idx)}}>X</button>
		</li>
	)
}

export default TodoItem;
