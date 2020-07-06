import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

const logger = state =>next=>action => {
  console.log('dispatch', action)
  let result = next(action);
  console.log('nextState', state.getState())
  return result;
}
const store = createStore(reducer, applyMiddleware(logger))
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
