import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './Store/Auth';
import { SnackbarProvider } from 'notistack';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ShoppingReducer from './Redux/Reducer/ShoppingReducer';

const store = createStore(ShoppingReducer);

ReactDOM.render(
  <Provider store={store}>
    <AuthContextProvider>
      <BrowserRouter basename='https://chetanudemy.github.io/gd/'>
        <SnackbarProvider maxSnack={3}>
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </AuthContextProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
