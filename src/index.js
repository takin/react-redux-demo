import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import allReducers from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


var store = createStore(allReducers);
console.log(store);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
