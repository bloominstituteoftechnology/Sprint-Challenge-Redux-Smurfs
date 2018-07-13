1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Object.assign, spread operator, concat

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are used to call reducers, reducers change the state depending on the action / store is basically the whole state tree of the application.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global, while component state is local. Good use for component state is for form data / toggle functionality, which isn't needed on the global state.

1.  What is middleware?
middleware is a third party extension which can be used to be asynchronous calls.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
allows actions to return a function which has access to the dispatch method.

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect