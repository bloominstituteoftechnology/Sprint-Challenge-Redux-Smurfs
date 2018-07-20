1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?

1.  Object.assign, spread operator and slice. We use Object.assign and spread operator to creat a new object while extending the properties of the old object.
1.  Actions tells us what changed and how did it change. Reducers are representation of our State/Store within our redux application. Store is the state of the application.
1.  Application state is global and Component state is local. For example it would be good to have a local component state when adding a new Smurf in the Smurf Form. It would be good to have the smurfs array on the application state so it can be accessed in any component and not just within it's own.
1.  Middleware allows our redux application change from synchronous to asynchronous.
1.  Redux-thunk allows us to access dispatch directly and allows our redux application change from synchronous to asynchronous.
1.  Connect links up our components with our redux stoe
