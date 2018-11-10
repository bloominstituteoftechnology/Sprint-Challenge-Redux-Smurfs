1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

  Object.assign, object spread, and array spread operater.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  Actions are things triggered by human interactions. These are JavaScript objects that always contain a type that describes changes in the app.

  Reducers are functions that evaluates the current state of an application based on the actions it receives. Then it creates a new state to replace the previous state in the store.

  The store is where the state of an application is held, gives access to state through getState(), allows state to be updated through dispatch(action) and registers listeners in subscribe(listener).

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?



1.  What is middleware?

  Middleware acts as an extension, and can be used to add additional functionality.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Since redux reducers are synchronous, redux-thunk give us the ability to handle asyncronous operations in action creators.

1.  Which `react-redux` method links up our `components` with our `redux store`?

  The connect method.
