1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
--> map, filter, splice


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
--> store keep/manage state
    actions return an action packet that our reducer will receive.  action contains data from application
Reducers receive the state of our redux store, along with an action created
by our action creator


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
- difference is the scope of the state.  Application state can be used in the whole application.  Component state is only used in that component.  If one needs that state in whole application, use application state.  if not, use compnent


1.  What is middleware?
- it's library to be used in the redux that can provide additional functionalities.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
- it allows async functionality.  action creator passes dispatch


1.  Which `react-redux` method links up our `components` with our `redux store`?
- connect