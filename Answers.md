1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
object map and filter

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions are objects including payload and type describing a change.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
application state is needed by the entire project while component is specific actions and functions needed by a local component. use application for everything and only use component if you arent worried to lose the state

1.  What is middleware?
software that is injected into the redux flow to, allows for async calls.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
function returned by another function allows us to use middleware

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect