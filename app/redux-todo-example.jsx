var redux = require('redux');

console.log('Starting redux todo example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New searchText is', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'I just changed the search text from null to this!'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Here\'s another action'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Final action'
});

console.log('searchText should update based on a store dispatch', store.getState());
