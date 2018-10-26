1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? 

.map,  .filter, and concat. Map creates a new object

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are information (payloads) that send data from your app to your store. Reducers specify how state is changed based on the actions sent to the store. The store is an object that brings actions and reducers together. The store:
holds app state,
provides state access
allows updates to state


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and component state is local. Use component when only that component needs access to state. 

1.  What is middleware?

is a bridge between an application and a database.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is middleware that let one call action creators that return a function instead of an action object. 


1.  Which `react-redux` method links up our `components` with our `redux store`?

connect 