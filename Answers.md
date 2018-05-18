1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

`Object.assign()`, `Array.concat()`, and `Array.map()` are examples of array/object methods that do not produce side-effects. We use `Object.assign()` to create a new object while extending the properties of another.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

An __action__ is used to change the state. It's an object with a type, which is used to tell the reducer what action to perform, and a payload (optional) which can be used to pass along data to the reducer.

A __reducer__ is an accumulator that takes in values and returns a single object (the new state). It's a function that handles the actions to update and return the new state.

The __store__ is an object that keeps track of the Application state.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

The Application state is accessible throughout the application and is held in the store. It should be replaced with a new state when a change occurs (it's immutable).

A Component state, on the other hand, is stored inside of a single component. Certain properties can be passed down to children, but children cannot dispatch actions to update the parent component's state.

4.  What is middleware?

Middleware is a function or set of functions that are dispatched in the middle of an action and a reducer. Middleware is often used to make asynchronous calls (like Thunk), or to log actions (like logger). Multiple middleware functions can be chained together in an application.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware function that allows you to dispatch actions asynchronously. With redux-thunk, action creators consist of Promises instead of just directly dispatching actions.

6.  Which `react-redux` method links up our `components` with our `redux store`?

`connect` links the components to the redux store.
