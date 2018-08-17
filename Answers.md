1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
.filter, .map, .reduce and Object.assign

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The store is like a central vault where the state of an application is stored. Actions describe events that have taken place in the application.
Reducers are functions that perform some operation as a response to an action they received.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state refers to the state of the application that can be accessed globally. Component state refers to the state of a specific component that can't be accessed globally.

1.  What is middleware?
Middleware is software that acts like a `middle man` or bridge between 2 other software components

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
'redux-thunk' allows us to handle asynchronous operations. The 'action-creators' gain the ability to return functions
that have access to 'dispatch()'

1.  Which `react-redux` method links up our `components` with our `redux store`?
The `connect` method
