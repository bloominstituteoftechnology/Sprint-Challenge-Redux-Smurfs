1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
filter, .map, .reduce. Object.assign() method creates a new object and allows us to extend properties. 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are payloads of informations, source of information for the store, sending them to the store using store.dispatch(). Reducers responding to actions specify how the app’s state changes, update the state according to actions.The store brings them together: holds the state, allows access, to update the state. There is only 1 store in Redux. combineReducers() will combine all of the reducers into one, import it and pass it to createStore().

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
 Application state is global, and  component state is local. Stores hold application state, any component, anywhere in the app can access it if they hook into it. Component state lives within that specific component,it can only be updated within that component and passed down to its children via props.
The more state needs to be shared between different components in the app, the more benefit there is to using the Redux store. 

1.  What is middleware?It gives new functionality to Redux, intercepts every action before it flowes through the reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?Redux-thunk is a middleware, handles asynchronous operations in action creators. if the action creator returns a function, the operation is asynchronous with redux-thunk.

1.  Which `react-redux` method links up our `components` with our `redux store`? connect
