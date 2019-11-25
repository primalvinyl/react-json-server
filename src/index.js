import 'core-js/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './reducers';
import rootSaga from './sagas';
import App from './components/containers/App';

// saga middleware
const sagaMiddleware = createSagaMiddleware();

// redux store
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware, logger)
));

sagaMiddleware.run(rootSaga);

ReactDOM.render((
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
), document.getElementById('root'));