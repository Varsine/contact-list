import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import rootReducer from './store/reducer/Index'

import App from './App'

import './styles/global.scss'
import './styles/_reset.scss'

const devTools =
	process.env.NODE_ENV === 'development'
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
		: null

const store = createStore(rootReducer, compose(applyMiddleware(thunk), devTools))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
