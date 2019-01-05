1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array methods that do not produce side-effects include .map .filter .reduce; these return a new array, leaving the original one untouched (immutability)

.concat is another method that does not produce side-effects.

The method to create and extend properties of another object is Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

When a user executes one of the Server Calls (i.e., GET, POST, DELETE, PUT), she must call one of a couple Action Creators or types (LOADING, SUCCESS, ERROR) - all of this is contain in Actions, which, once called, gets dispatched to Reducers. 

Reducers, will update the state (on the Store), depending on the action type (LOADING, SUCCESS, ERROR) - it has a switch statement that will return a different state (object) depending on the action type.

Once the state is updated, these changes are sent back to components for rendering. 

The store is known as the 'single source of truth' because it contains all previous state (initial state) and all changes in state, and will send those to components, freeing up various components from having to pass state down to each other.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application State is the state contained in Redux, Component State is local state on any individual component. It's a good time to use Application state if once state is passed down four levels of components (via props).


1.  What is middleware?

Middleware sits between the Action and Reducer, and gives the coder control over what gets dispatched. This is useful when performing asychronous operations.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

'redux-thunk' is an example of middleware and allows programs to handle asynchronous operations inside of Actions, for example, dispatching LOADING vs dispatching SUCCESS. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

the { connect } method is a 'react-redux' method that links our components with the redux store. 