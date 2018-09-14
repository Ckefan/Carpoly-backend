import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

/*createStore 生成新的store对象；
    applyMiddlewere 对redux的dispacth 方法进行封装； 
    compose 当需要把多个 store 增强器 依次执行的时候
*/
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './axios.js'
import './config'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import reducers from './reducer.js'
import login from './container/login/login.js'
import manager from './manager'



const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

let img = require(`./images/wallpaper${store.getState().bg}.jpg`);
document.body.style.backgroundImage = `url(${img})`;

ReactDOM.render(
	(<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/login" exact component={login}></Route>
				<Route path="/manager" component={manager}></Route>
				<Redirect to="/login"></Redirect>
			</Switch>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
);


registerServiceWorker();
