import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import {Provider} from 'react-redux'
import store from './store'

const App=(
  //提供器
  <Provider store={store}>
    <TodoList></TodoList>
  </Provider>
)

ReactDOM.render(
  App,
  document.getElementById('root')
);