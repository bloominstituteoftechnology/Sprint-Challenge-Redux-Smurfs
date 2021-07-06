1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

--- Object.assign, .map, and .reduce do not produce side effects; Object.assign() creates a new object while extending the previous object's props.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

--- Actions contain certain actions that can be called by reducers. Store is the single source of truth because all states are routed to it.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

--- Application state is the accumulation of all the states that is passed to it (global), and component state contains state for the component it is assigned to it. Use application state for larger projects, component state is more useful for small applications.

1.  What is middleware?

--- Middleware allows more things to happen by connecting packages.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

--- Redux-thunk allows thunk to be used, which is a middleware that allows async functions to be called.

1.  Which `react-redux` method links up our `components` with our `redux store`?

--- Connect().