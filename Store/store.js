const logger = state =>next=>action => {
    console.log('dispatch', action)
    let result = next(action);
    console.log('nextState', state.getState())
    return result;
  }
  const store = createStore(reducer, applyMiddleware(logger))