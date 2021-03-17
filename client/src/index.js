import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { theme } from './theme'
import { reducers } from './reducers'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </>,
  document.getElementById('root')
);

