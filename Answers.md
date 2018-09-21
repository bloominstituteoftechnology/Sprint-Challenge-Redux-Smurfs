1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Map, filter, and concat. Map

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions have an action type and data.  They let us know if something changes on the page and the reducer takes that information and updates the store. Reuducers take and action and current state and update it with the new state.  The Store contain the state of the app.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is when the original state is cloned and modified.  The original state is never changed.  Component state can be modifed directly.  Component state can be used when there is minimal data to store in the state.  When there is a lot of data in the state Application state should be used.

1.  What is middleware?

Middleware adds functionality.  It's jobs is to interact with actions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware that allows asynchronous functions to be handled in action creators.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect()