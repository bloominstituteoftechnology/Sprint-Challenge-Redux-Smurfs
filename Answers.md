1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
3 methods: filter, map, and reduce.
Object.assign or spread operator

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: show us what is changed in the data.
Reducers: manage the actions and update the state
Store: sets the state. It is known as the 'single source of truth' because it the main state for the entire app.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is used for the entire app. Component state is only accessible to the local state. Application state is recommended for large application.


4.  What is middleware?

Middleware is an extension for Redux, it adds new functionality to Redux.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a node package. It returns a function from action-creators using dispatch.

6.  Which `react-redux` method links up our `components` with our `redux store`?

Connect