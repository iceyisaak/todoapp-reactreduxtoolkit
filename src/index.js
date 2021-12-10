import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
// import { TodoContextProvider } from './contexts/TodoContext';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import './styles/globalStyle.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);