1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
2. Map, Filter, Every.
A method to create a new object while extending propertites of another object would be `Object.create()`

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
2. `actions` are payloads of information that provide data from the application to the store.
   `reducers` specify how the state changes in response to the actions sent to the store.
   `store` is the object that brings both the actions and reducers together.
   The store is known as a 'single source of truth' because it is the holder of the application state, and allows updating of the state.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
2. Application state is global and is held in the store, components are able to access the state so long as they hook into it. However component state only lives within the single component, can only be updated within it, and passed down to its children via props.

1.  What is middleware?
2. Middleware allows us to intercept every action before it goes through the Reducers. It can be used for, loggin, crash reports, routing, among other things.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
2. Redux thunk provides the ability to have action creators return functions that have access the dispatch method of the Redux Store directly and allows the possibility to dispatch multiples actions or none from a single action creator.

1.  Which `react-redux` method links up our `components` with our `redux store`?
2. We use `Connect` to map the stores state and dispatch to the props of the component.
