1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    `map`, `filter`, `concat` all produce new arrays from the source array. One uses `Object.assign` to create a new object while extending the properties of the source object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    1. `actions` are events that are triggered by the UI, which communicate to the reducers their type and payload.
    2. `reducers` are managers of state that translate actions into the corresponding state changes with a finite state machine, which is achieved with a `swtich` statement.
    3. `store` is a central location that behaves like state in a React component. It is the single source of state storage, and therefore easier to manage than multiple states across nested components, but can still be used with state-ful components as needed.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is usually managed by Redux, and is the record of data that the application is interacting with, while Component state is a local record of data that is tied to that component, and is good for things such as form or input management. Application state is good for updating data that will be transferred to the server, while Component state is good for managing UI changes until the user approves the changes by triggering an action.

4.  What is middleware?

    Middleware extends the functionality of redux by providing new capabilities or exposing functions redux abstracts away.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    `redux-thunk` is middleware for Redux, which allows us to return a function instead of an object in the `action-creators`. It does so by exposing the `dispatch` method for use. 

6.  Which `react-redux` method links up our `components` with our `redux store`?

    connect(mapStateToProps or null, { actionName1, actionName2...})(Component);
