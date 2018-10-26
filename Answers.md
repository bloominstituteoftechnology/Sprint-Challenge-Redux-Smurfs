1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
you can use 'map', 'filter' & 'reduce' all of which return a new array and do not mutate the orginial array.  to create a new object extending properties you can use the spread operator or object assign

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions - packets of information (plain javascript objects) triggered by user interaction
reucers - pure functions that compare current state and actions in order to update the state 
store - the store is your application state data

the store is a single location that stores your apps data.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
application state is like a global storage and component state is a local storage.  you should use a local storage if no other components need a particular components data.  if multiple components work with your data it should be in application state

1.  What is middleware?
middleware is used to extend the functions of redux, and allows for asynchronous calls

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk allows your action creater to return a function, and gives your actions access to 'dispatch' from the store

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect
