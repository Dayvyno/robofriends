import React from 'react';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import App from './containers/App';
import { searchFieldState, robotsState} from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const rootReducer = combineReducers({searchFieldState, robotsState})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
<Provider store={store}>
  <App /> 
</Provider>,
document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
