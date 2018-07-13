1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Array.map, Array.includes, array.filter, object.assign,

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The store hold data globally. actions send information to the store. Reducers specify how an action affects the state

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    application state is global, component state needs to be passed down to each component.
    A good time to use it is when you need a single source of truth

1.  What is middleware?
  a script that intercepts actions before they reach the reducer

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  It allows us to make async requests, a solution to redux unidirectional approach.

1.  Which `react-redux` method links up our `components` with our `redux store`?
  connect
