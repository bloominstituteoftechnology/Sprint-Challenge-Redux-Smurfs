1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Filter, map, and concat
Object.assign can be used to create a new object while extending the properties of another.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions tell us something has changed, usually due to human interaction.
Reducers take in those actions and produce a new store
Store is all of the state of the application.
The store is immutable
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
The Application state is global, whereas the Component state is local. If application components need to share data, it is a good idea to put it in the Application state, whereas if the data is only needed by a certain component, component state might suffice.
1.  What is middleware?
Middleware interacts between the actions and the reducer.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk is a middleware that can delay dispatches until certain conditions are met. It can return action functions rather than action objects.
1.  Which `react-redux` method links up our `components` with our `redux store`?
Connect links up 'component' and 'redux store'