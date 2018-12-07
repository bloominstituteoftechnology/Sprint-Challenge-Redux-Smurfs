1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
  - .map(), .reduce(), .concat()
  - we use Object.assign()  // not understandig things part othe question but I am sure this is the right answer.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  - store in redux stores the state, and allows for methods like dispatch, subscribe
  - reducers updates the state base on the type of action
  - action are fucntions that do api requests according to the top of state or action

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
  - application state is state in redux is the single source of truth,
  component state is a state in a class component.
  - if state becomes to complex it is probably a good idea to use application state. but if the state is simple or the app is simple stick with component state

4.  What is middleware? 
  - middleware is functionality that does something before an action is dispatched to reducers, could do an api call before dispatched to reducers to keep state in sync.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   - redux-thunk allows for api request and sends that request to reducers in a closure to update state from api data

6.  Which `react-redux` method links up our `components` with our `redux store`?
  - store.createState links up or components with redux store and we use connect to map that data from state to props.
