1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    map, forEach, every do not produce side effects
    Object.assign() creates a new object while extending an object's properties

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are functions to be used in components. They return objects containing at least the 'type' property.
    Reducers alter the state depending on the passed in type.
    Store is the the root scope of redux injected into the provider component at the root of the component tree.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is accessible to all components. It is useful when deeply nested (>2 layers) components depend on the state of the parent or when a state is used in multiple components throughout the app.

1.  What is middleware?
    Middleware is some operation that takes place before another operation that usually changes the data before it is used in the second operation.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux thunk is middleware that enables one to use a function instead of an action. It can be used to delay the dispatch of an action.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect()