1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
[Three JavaScript Array Methods that do not produce side-effects are .map(), .filter(), and .reduce(). The method that we use to create a new object while extending the properties of another object is .map().]

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
[Actions are functions that inpply all the actions and moves going on the the state.
Reducers are functions that take in two objects and return an updated state. 
Store contains our state for the app and holds the state tree.]
[Set up a Store(state tree)
State tree is passed to our view 
In the app, an event happens or we make an event happens 
That event triggers an action creator
Which returns an action
That action is put to the reducers 
And a new state tree is created.]
[The store is known as a "single source of truth" in a redux app because the function in the store Does Not need to be touched past creating it.]

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
[Appication state is global while Component state is local. Store hold application state using Flux. Component state lives within that specific component. It can only be updated within that component and passed down to its children via props.]

1.  What is middleware?
[middleware is used to intercept some process, run a function at the intercept point, then (usually) continue the processs, or completely stop the process.]

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
['redux-thunk' is used to make the flow asynchronous so we can make API calls from our action creators.]

1.  Which `react-redux` method links up our `components` with our `redux store`?
['redux-logger' ]
