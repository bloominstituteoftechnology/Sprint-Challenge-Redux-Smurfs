1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
map, filter, reduce, splice, spread  opertor. Object.asign is used to create new objects from another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions return special token objects which match any logical set of state updaters in the reducer. The Store is the single place where our state is stored. It is often called the single source of truth because it returns only the needed state objects to specific components, nothing more nothing less. This way it is quicker in processing. Aka state management.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
App state is where our state is stored and component state reicieves specific needed state data

1.  What is middleware?
since redux is synchronous, using middleware allows us to extend the functionality that allow for promises.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redeux thunk is a type of middleware that allows our functions to be asynchronous. thunk gives access to the built in function dispatch for our action creators 

1.  Which `react-redux` method links up our `components` with our `redux store`?

the connect method