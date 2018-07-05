import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Counter from './counter';
import './App.css';

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="counterWrapper">
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
