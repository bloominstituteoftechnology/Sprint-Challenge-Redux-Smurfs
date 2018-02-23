1.  - Array.prototype.concat()
    - Array spread operator ...
    - Object.assign()
    - Object.assign would be used to create a new object and extend the properties of another object.

2.  - actions- send data to the store
    - reducers- update the state according to the actions are sent to the store
    - store- hold the state and allows access to the state with `getState()`, there is only one store in a single application.

3.  - Application state- is the state of the entire application
    - Component state- is related to only the component and shouuld only be temporary

4.  Middleware is an extension between the dispatch of an action and the reducer.

5.  `redux-thunk` changes `action-creators` by allowing them to return a function instead of an action.

6.  The `connect` method links components to the redux store.