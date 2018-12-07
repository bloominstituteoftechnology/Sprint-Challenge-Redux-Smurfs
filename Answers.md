1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    map, filter, concat

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions are run and send data to the reducers, the reducers then manipulate the data for the store. The store is like the state of redux.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is state that is needed by parts of the application other than the component it exists in. Component state is local state that is only used by a single component or it's children.

1.  What is middleware?
    It sits between two parts of the application intercepting data and doing things with it before it gets sent to the rest of the application.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    It allows you to basically write asynchronous actions

1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect()
