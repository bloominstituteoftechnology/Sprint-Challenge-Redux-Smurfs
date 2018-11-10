1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    .map, .filter, and .slice. Object.assign

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    store holds the global state of the app, actions are functions called by the app to dispatch an object to the reducers. reducers are functions that take the dispatched object and processes it, updating the global state. The store is the 'single source of truth' because it hold the state for the entire app

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is data that is shared by the entire application. Component state is data needed by a single component. Component state could be used to store user input on a single component.

1.  What is middleware?

    middleware is api's that intercept the dispatch in the action functions. Allowing new functionality to be added to redux.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    redux-thunk is a middleware used to intercept the dispatch in our action creators. It allows us to dispatch objects to the reducer. Our action creator returns a function instead of an object.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    connect()()
