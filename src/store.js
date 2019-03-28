import { createStore } from 'redux';

const initialState = {						/* Initial array */
	todo: ["Buy milk", "Clean room"]
}

const reducer = (state = initialState, action) => {
	console.log("reducer: ", action);
	
	let arr = state.todo;
	
	if(action.type === "del"){							/* Delete */
		arr.splice(action.idx, 1);
		console.log(arr);
		return Object.assign({}, state, {todo: arr});
	}else if(action.type === "add"){					/* Add */
		console.log(arr.push(action.str));
		return Object.assign({}, state, {todo: arr});
	}
	return state;
}

const store = createStore(reducer);

export default store;