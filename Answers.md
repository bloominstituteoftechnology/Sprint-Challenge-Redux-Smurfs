1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
.map, .filter, .concat methods.
the method we used to create a new object is Object.assign()
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Store: the object that contains and updates state. this state is immutable and refered to as the single source of truth.
Reducers: control how application state is changed in response to actions sent to store.
Actions: contains payloads of data to be passed to the store.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the store and is immutable.
component state is the mutated data derived from the application state.
1.  What is middleware?
works between actions and the reducer giving us better control of how data gets passed.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
thunk allows us to use asynchronus actions like dispatch to give us more control with our actions.
1.  Which `react-redux` method links up our `components` with our `redux store`?
the connect method