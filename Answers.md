1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? Map, Filter, Splice

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are sent to say that something might need to update, and they have information about that update. reducers take actions and provide a new version of state based on what the action brought them. That state is saved in the store. The store is the single source of truth, because it's the one place that should contain all significant information about the state.

1.  What is the difference between Application state and Component state? 
When would be a good time to use one over the other?
1.  What is middleware? 
it's library to be used in the redux that can provide additional functionalities.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
 it allows async functionality.  action creator passes dispatch

1.  Which `react-redux` method links up our `components` with our `redux store`? We use connect
