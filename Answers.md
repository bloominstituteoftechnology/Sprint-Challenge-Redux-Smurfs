1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? forEach, map, filter, We use Object.assign()
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are what what trigger a reducers and reduces are used to modify the state that is in the store, and the store is where the state is kept.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other? Application state is the global state of the application and the component state is just for a single component. Application states are used often in big applications when many components need access to the same state data, and component states are used mostly in small applications or when certain state data is needed only in certain areas areas of the application.
1.  What is middleware? Middleware acts a bridge between two applications.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
 is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed


1.  Which `react-redux` method links up our `components` with our `redux store`?
connect
