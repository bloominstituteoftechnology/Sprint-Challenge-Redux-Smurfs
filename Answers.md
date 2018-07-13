1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    - `slice`, `...`, `map`
    - `Object.assign()`
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - actions: a list of "actions" that return an associated object. Must have a `type` sometimes has a `payload`
    - reducers: a pure function that corresponds with actions that updates the state
    - store: a place where the state lives; entire app has access
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - Application state is when the entire application has access to the state (store) - useful to keep track of a user's logged in status, for example
    - Component state is when only that component has access to its state; useful if you have a form, for example.
4.  What is middleware?
    - Middleware is a function that returns a function. In React context, it gives the coder an opportunity to add some functionality between the dispatch of an action and before it reaches the reducer. Must have a `next` so we continue on to the next middleware or on with the program.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - Thunk gives asynch functionality to our actions. Instead of our action-creators return an object, they return functions.
6.  Which `react-redux` method links up our `components` with our `redux store`?
    - `connect` is the magic that links up the components and store.
