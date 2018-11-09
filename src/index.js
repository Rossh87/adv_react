import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import Root from 'Root';

const initState = {
	comments: [
		{
			text: 'comment 1', 
			id: 'placeholder'
		}
	]
};

ReactDOM.render(
	<Root>
		<App />
	</Root>
	, document.querySelector('#root')
);