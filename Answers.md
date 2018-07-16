1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1. Object.assign()
2. Array.map()
3. Array.reduce()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Action : this is an object which describe the change on our redux state

Reducer : this is a function that take in state and action to produce new state as describe in the action object

store : this is a container for our state in a redux Application

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?
the Connect function which accept mapStateToProps and action
