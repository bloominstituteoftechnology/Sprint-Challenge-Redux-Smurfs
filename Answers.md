1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects?
Slice(), spread operator, map
 Which method do we use to create a new object while extending the properties of another object?
 Spread operator
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Action: determined functionality
reducer: manage state
store: keep state as props so it can be access anywhere
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
application state can be access in the golbal level, it can be change and edit anywhere. Component state live within the state and can only be edit with in that component. Smaller scale project can use component while bigger scale use application
1.  What is middleware?
middleware provide a point in between dispatching an action and before it reaches the reducer
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
allow us to return a function instead of an object
1.  Which `react-redux` method links up our `components` with our `redux store`?
connect, mapstatetoprops
