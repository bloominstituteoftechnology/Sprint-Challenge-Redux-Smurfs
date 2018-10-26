1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

`Array.prototype.filter()`, `Array.prototype.map()`, `Array.prototype.slice()`, `Object.assign()`. The final option works well for extending the properties of a obejct to a new object, although in practice it is much cleaner to use the spread operator. 

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

`actions` are objects that contain information about how we want state to change. They are created by `action creators`, which are functions that we can call from our components. `reducers` update state based on the action type and payload we have passed. The `store` contains our application state. It is known as a 'single source of truth' because with Redux the state of our application is not spread out over our entire application, where it might be difficult to get components to communicate with one another, and is instead centralized and equally accessable to all components (assuming proper forwarding of props or use of the connect method).

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that is shared across an application whereas component state is localized to a single component. Any time we have complex logic flows where components in different branches need to use the same state we would want to use application state (here would be a good use case for Redux). Any time we don't care about state beyond the bounds of a single component, for example with a counter, would be a good use case for component state. 

4.  What is middleware?

Middleware is a way of injecting logic between steps in a process that are normally adjacent. For example, Redux middleware steps between the calling of our ation creators and the calling of our reducers to produce some side effect, for example logging or launching API requests and awaiting responses. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` allows our action creators to return functions instead of objects. Those functions we can then pass methods such as dispatch. This allows us to perform asynchornous actions before dispatching other actions. 

6.  Which `react-redux` method links up our `components` with our `redux store`?

`connect` to which we will need to pass `mapStateToProps` and `mapDispatchToProps` methods. 