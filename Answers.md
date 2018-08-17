1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Answer: .map(), .reduce(), .filter() for arrays, .assign() for creating new objects in the manner specified.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Answer: actions are plain JS objects that describe the changes we want to make to state, which is read-only in redux and stored in the store.  Reducers are what connect actions to the store, they return a new version of state based on what actions are dispatched.  
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Answer: Application state is that which is stored as one JS object in redux's store, whereas component state is stored "locally" within itself.  The latter is useful if the state data is needed in a small area of the app, for example like with form inputs. This information would likely not need be stored in application state.
1.  What is middleware?
    Answer: Middleware adds new functionality to redux by acting as a middle step between an action getting dispathced and the reducer receiving that action.  
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Answer: it allows us to perform asyn operations within our action creators, which, in order to do so, must be written as functions instead of objects.
1.  Which `react-redux` method links up our `components` with our `redux store`?
    Answer: connect();
