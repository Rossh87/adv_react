import { Provider } from 'react-redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import rootReducer from 'store';

export default ({ children, initState={} }) => {
	const store = createStore(
		rootReducer,
		initState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}