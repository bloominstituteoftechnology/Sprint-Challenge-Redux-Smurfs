1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    .map, .filter, .concat don't produce side-effects. Object.assign can be used to create new objects.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    store is main location that keeps the state data. Actions "dispatch" functions according to contained by reducers.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is the main state that is accessible by any sub components. Component state is the state within a component and its only acessible to its sub components.

1.  What is middleware?
    middleware is a concept that provides asynchronous functionality to an app.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux-thunk is a middleware that allows us to handle asynchronous opertations inside action creators. It allows dispatching multiple actions through a single action creator, and if there is a function inside action creator, that function becomes asynchronous.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect method
