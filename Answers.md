1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Filter, map, and reduce are three array methods that do not mutate the original array. The assign object method is used to extend the properties of another object.


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are JS objects that describe changes that can be made to state. Reducers are JS functions that take in the state and an action and return the changed state based on the action. The store is an immutable object tree that holds the state of the app. It is known as a 'single source of truth' because all app state is held within it.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global and may need to be accessed by multiple components. Component state is local and only used internally. If no other component will need to access the state, for example managed input fields, then you would not need to use the global application state.

4.  What is middleware?
Middleware creates an extension point within Redux. It adds additional functionality by intercepting and interacting with actions before they reach the reducer.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is middleware that lets us handle asyncronous operations before an action reaches the reducer. With redux-thunk, the action-creators can return functions that can use dispatch().

1.  Which `react-redux` method links up our `components` with our `redux store`?
The react-redux method mapStateToProps() links our components with the redux store.
