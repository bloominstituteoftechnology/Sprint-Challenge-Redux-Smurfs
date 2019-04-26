1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Map, Filter, Reduce

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions - JS Objects containing information for the store
    Reducers - Use the actions to change the state
    Store - Holds the state for the app

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is useful for sharing state across the app. Component state is best used when the state is just needed by the component/related components. A simple form might be a good place to use component state rather than application state. 

1.  What is middleware?
    Middleware is a library that intercepts actions. It allows redux to be used asynchronously.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux-thunk is middleware that allows us to use redux asynchronously. It changes our action creators by allowing them to directly access the dispatch store method.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    Dispatch
