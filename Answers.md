1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
`Array.map()`, `Array.filter()`, and `Object.assign()` are three methods which do not produce side-effects. They do this by creating and returning a new Array/Object based on the input. `Object.assign()` is used to create a new object while extending the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions detect changes and call on reducers to handle those changes.
Reducers are "pure" functions that result in an updated store.
The store is the state that is held in Redux.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
The "Application state" is available to all components of an application as props - a "global" state for your application.
Component state is only available to that component (and it's children). The best use I can think of for component state is as a container to collect form data before submission.

1.  What is middleware?
In Redux - middleware is any piece of software that can intervene between an action call and it's reducers. It can be as simple as just logging the call to so complex that it could completely change the reducers from the original action call.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Naturally, Redux action-creators are synchronous. Thunk allows the action-creators to return asynchronous functions.

1.  Which `react-redux` method links up our `components` with our `redux store`?
The `<Provider />` component wraps our entire app and grants access to the Redux store.
