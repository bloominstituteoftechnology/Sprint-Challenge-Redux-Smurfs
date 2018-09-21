1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Map, filter, concat. You can use Object.assign to create a new object extending the properties of another object, or use the spread operator to do the same.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are payloads of data that are sent to the reducers to modify the state of the application. To accomplish this, the reducer interfaces with the store to actually modify the state. The store is known as the 'single source of truth' because it holds the application's state.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is global, component is local. App state can be used to pass information from low level components to the high level components. Component state stays on its level, a good use of component state is for user input.

1.  What is middleware?
    Middleware is a function or set of functions that are between the actions and reducers. It can serve as a filter for the actions before being sent to the reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux-thunk is middleware used to allow us to call async dispatch functions. Allows for multiple actions to be dispatched from a single action center.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    Connect is used to link up components with the redux store.