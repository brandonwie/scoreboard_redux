import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import PlayerReducer from './src/redux/reducers/player';
import Scoreboard from './src/containers/Scoreboard';

const store = createStore(
	PlayerReducer,
	composeWithDevTools(applyMiddleware(logger))
);

render(
	<Provider store={store}>
		<Scoreboard />
	</Provider>,
	document.getElementById('root')
);
