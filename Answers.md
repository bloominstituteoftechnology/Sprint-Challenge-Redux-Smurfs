1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

  .map(), .reduce(), and .filter(). Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  Actions cause changes to state, reducers apply the changes to state, and store holds the state across the whole application. The store is known as a 'single source of truth' because the whole application can refer to the store instead of having separate states for each component

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Component state is localized whereas application state is global. Component state is useful for local information, such as keeping track of inputs

1.  What is middleware?

  Middleware is software between an action and a reducer that assists with actions such as logging, error reporting, making asynchronous API calls, etc.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Thunk allows action creators to return a function instead of an action. It helps when making asynchronous actions such as API calls

1.  Which `react-redux` method links up our `components` with our `redux store`?
  connect()
