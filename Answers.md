1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
+ Reduce + map + filter + (also concat, join)
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
+ Actions - These are payloads of information that facilitate data from store
+ Reducers - These specifiy how the state will change in response to the actions. They house all of the logic for the state change.
+ Store - This is the object that brings Actions and Reducers together. Store hold application state. It is like the conductor for requests to change state.
+ Store is known as the 'single source of truth' because all requests for state change must pass through it.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
+ Application state is global. Component state is local. You would want to use component state when the change is small and does not effect the larger state. Something like a form submission. Otherwise, (particularly if you are recording keystrokes....) a very small change would facilitate constant state change at the global scale. it may not make sense to have such an architecture.
1.  What is middleware?
+ Middleware is a bridge between appications and databases. Within the context of redux it links our state to our components.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
+ redux-thunk is a middleware that observes every action that passes through the system.....if it sees a function...it calls that function. It changes our action creators by receiving dispatch as an arg and then dispathcing the proper action.
1.  Which `react-redux` method links up our `components` with our `redux store`?
+ Connect.
