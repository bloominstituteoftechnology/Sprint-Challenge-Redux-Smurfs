1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Map, filter, and concat. Map
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions have an action type and data. They let us know something changed and the reducer does its work.
Reducers take an action and current/previous state and calculate the new state.
Store contains the state.
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is when we clone the original state and modify the clone. Never changes the original state. Component state can be modified directly. Application state should be used when there is a lot of data in the state. Component can be used when there is little to store on the state.
4.  What is middleware?
Middleware add functionality. It interacts with actions.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is middleware that allows asynchronous functions to be handled in action creators.
6.  Which `react-redux` method links up our `components` with our `redux store`?
redux-thunk