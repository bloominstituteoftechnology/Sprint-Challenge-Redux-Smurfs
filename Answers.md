1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map, .filter, .reduce, Object.assign()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions in redux are plain javascript objects (or functions that return objects) that contain an action type as well as some data associated with it. reducers 
are responsible for calculating the new version of the state based on current state and a given action. The store is the centralized location for state in redux
that all components reference

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

The application state is the redux store, and the component state is the state that exists on a single component. It's better to use application state when that state needs to be shared across multiple components or pages and persist over route changes.

4.  What is middleware?

Middleware is a function in redux that receives all of an application's actions before they are dispatched to reducers and can manipulate which action(s) are sent.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk allows us to make action creators return functions that have access to dispatch(), and now we can dispatch multiple actions from a single action creator.

6.  Which `react-redux` method links up our `components` with our `redux store`?
connect
