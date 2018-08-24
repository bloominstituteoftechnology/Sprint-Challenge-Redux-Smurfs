1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?
1.  .map, .filter, .find, Object.assign
2.  actions: send data from the application to the store
    reducers: pure functions that specify how state changes in response to actions sent to the store
    store: it's the single source of truth because it holds all of state for the entire application in one place
3.  Application state is needed everywhere in the app; component state is only needed in that single component
4.  Middleware is something that extends the functionality of something else
5.  redux-thunk is middleware that allows for asynchronous code in Redux
6.  connect()