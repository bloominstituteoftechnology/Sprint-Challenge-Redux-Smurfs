1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
- concat() -- used to merge arrays. Produces a new array w/o modifying old
- slice() -- returns shallow copy of array with the specified modifications. Doesn't modify original array.
- Object.assign (can also be done using spread operator) -- Can be used to create a new object and extend the properties of another (like Object.assign).

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- actions are objects that send data from the application to the store. An action is formatted as an object. The object includes the type of action (formatted as a string or a variable), and then a payload (the data which is to changed/updated) if applicable.
- reducers specify how the state is to be updated in response to the action.
- The store is a single object that holds all of the state of the application. It's known as the single source of truth.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
- Application state is available everywhere in the application by using mapStateToProps. Component state is local to the component (unless passed to another component as a prop). It's best to use application state for anything that may need to be accessed by another component at any point in time. Local state is ok to use to store anything that won't need to be used by another component.
1.  What is middleware?
- middleware is code that gets run before an action reaches the reducer. It can do anything from log the action (redux-logger), stop actions, dispatch a different action,or even dispatch multiple actions.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
- thunk allows action creators to return a function instead of an action. A good use case for this is making async calls.
1.  Which `react-redux` method links up our `components` with our `redux store`?
- connect()(component)
