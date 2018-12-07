1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
  .map, .filter, .find

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  Actions are plain JS objects that have type and sometimes payload properties, used to describe what to do to the reducers.
  Reducers are functions that take current state and action as arguments and return new state based on the action taken.
  Store is the state container and the single source of truth.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
  Application state is the top level state in our application, or when using Redux, the store state. Component state is lower level states that are not being kept in root level such as form state. If the use of the state can be contained in a component, then no need to put it in top level state. 

4.  What is middleware?
  A third party extension

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  A middleware that allowed action creators to return a thunk instead of only plain object so that we can work asynchronously with Redux.

6.  Which `react-redux` method links up our `components` with our `redux store`?
  connect()
