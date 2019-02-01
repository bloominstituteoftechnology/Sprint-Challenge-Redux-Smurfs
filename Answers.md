1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Object.assign, Array.map, Array.filter, and we use Object.assign to create a new object and extend properties.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Store is known as a single source of truth because there is only one store that keeps all the information of the app in one single place, actions dispatch an object to the reducers and update the store

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is state that can accessed anywhere, while component state is local. You can use application state when your applications are getting large and it is not practical to keep prop drilling, and also when multiple components such as siblings need to share state.

1.  What is middleware?
    Middleware are what is added to redux that provides a way to interact with actions before they reach the reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux-thunk allows to use call action creator that return a function instead of an action object

1.  Which `react-redux` method links up our `components` with our `redux store`?
    The connect method of react-redux allows us to link the component to the redux store.
