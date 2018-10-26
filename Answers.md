1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Object.assign(), Map, and Reduce don't mutate the object or array; Object.assign() should be used to create a new object with all of the old object's properties.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store handles state for the entire application, allowing for far less prop drilling. The store is the single source of truth becauses all state either comes from there or needs to go there (via actions) in order to make real changes to the entire application. Actions are JS objects or functions that return JS objects. Because the store is immutable, actions are dispatched by the store in order to change state in an acceptable manner. Reducers are functions that take in actions and return a new state object. They do not update state directly.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is available to the whole application, but component state lives within a specific component and can be passed down to its children. Component state could be used to update application state or to keep some data local. If the data needs to be on all components, it should be on the application state, but if it's only on a component and its children, then component state should suffice.

4.  What is middleware?

A middleware is a library which actions must go through before reaching reducers. Middleware can then decide how/if the action should go on to reducers.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows for async redux since redux is synchronous. Functions can now be returned from action creators, allowing us to choose when to call dispatch.

6.  Which `react-redux` method links up our `components` with our `redux store`?

Connect links up our components with the store via mapStateToProps.
