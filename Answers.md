1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    // .map() .filter() .reduce() etc.
    // Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    //`store` contains the entire state of the App, and `actions` tell us what change is happening to the state, and then `reducers`handle the change.
    //because the store is immutable!

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    //Application state is immutable and is used across all Components; Component state is inheritated from its parent Component.
    //When there are state properties that are passed along so many layers, it is better to use Applicatoin state.

1.  What is middleware?
    //middleware is used to dispatch async actions; it comes in between dispatching an action and when it reaches a reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    //`redux-thunk` lets the action creators invert control by dispatching functions. They would receive dispatch as an argument and may call it asynchronously.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    `connect`