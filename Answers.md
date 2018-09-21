1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

concat, map, filter
Object.assign() or {...object, props}

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are packets of information containing an action type and a payload of data.
Reducers are pure functions that update the state, taking the previous state and a given action and returning a new state object.
The store is an application-wide state object.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state can be accessed by any component via 'connect', while component state is local to the component. Form input values are a good example of things to keep in the component state.

1.  What is middleware?

Middleware is something that intercepts actions before they flow to the reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a package that allows action creators to return functions that have access to dispatch().

1.  Which `react-redux` method links up our `components` with our `redux store`?

{ connect }
