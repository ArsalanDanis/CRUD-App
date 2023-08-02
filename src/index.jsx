import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import './index.css'
import { BrowserRouter } from 'react-router-dom';

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';


const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = configureStore({
  reducer: rootReducer, // this was the missing piece
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true,
});

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)