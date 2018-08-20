1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Pure functions,

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
REDUCERS - are one of the most important concepts in Redux. It takes 2 parameters (state, action).
STORE - the redux store keeps the application state object.
ACTIONS - the only way to change the state is to emit an action, an object describing what happened.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
The application state refers to the global state of the app. Components can have their own local state. 

1.  What is middleware?
Provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is a middleware that lets you call action creators that return a function instead of an action-creator.

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect
