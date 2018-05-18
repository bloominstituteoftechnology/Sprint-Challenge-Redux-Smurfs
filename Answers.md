1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    * .map .filter and .concat 
    * Object.assign
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    * An action creator generates an action.
    * The action is dispatched to the Redux store.
    * The store holds your application state and it's where a reducer handles the action.
    * The reducer passes the action to a component and returns a new state.
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    * Application state can be accessed anywhere within the application. Component state is confined to only be accessible by a particlur component. 
4.  What is middleware?
    * Middleware is a powerful extension point for Redux. We can use middleware to add new functionality to Redux.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    * Redux Thunk is a middleware created by Dan Abramov, that provides the ability to handle asynchronous operations inside our Action Creators.
6.  Which `react-redux` method links up our `components` with our `redux store`?
    * connect
