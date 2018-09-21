1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Object.assign(), map(), and ,filter() do not produce side-effects. Object.assign() creates a new object while extending the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are object represenations of events
    Reducers take in state and a specific action that was dispatched
    store is the object that contains state

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is the store, holds state that everything can use. Component state holds state for a single component, and should only be used when that state is not needed outside the component

1.  What is middleware?
    Intercepts actions before theyflow and then do something

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    middleware used to make async calls

1.  Which `react-redux` method links up our `components` with our `redux store`?
    Connect
