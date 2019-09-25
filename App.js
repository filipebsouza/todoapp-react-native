import React, { Component } from 'react';
import { Provider } from 'react-redux';

import TodoApp from './src/TodoApp';

import store from './src/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}
