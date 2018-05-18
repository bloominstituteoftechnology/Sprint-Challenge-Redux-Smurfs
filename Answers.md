1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map, filter, reduce
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are flags that go into reducers. reducers are the pure function that take in a input and have an output without any side effects. STORE is the place that isn't changed directly and that has all the state of all the components.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is a single global scale. every component has it's own state.

1.  What is middleware?

middle ware gives us access to dispatch so that we can do async action to the data that is being passed to the reducer

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect