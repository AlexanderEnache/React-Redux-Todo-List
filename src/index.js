import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo.js';
import store from './store.js';
import {Provider} from 'react-redux'

ReactDOM.render(<div>

<Provider store={store}>
	<Todo/>
</Provider>
	
</div>, document.getElementById('root'));