1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
# .map .filter .reduce. spread operator
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
# actions are like triggers that fire the reducers which are the functions. store is the global state
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
# application stte is the store and should be used if you need the state to transcend components. component should be used if you just need the state within a component.   
1.  What is middleware?
# a buffer between applications and databases
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
# it allows us to make async requests
1.  Which `react-redux` method links up our `components` with our `redux store`?
# connect()