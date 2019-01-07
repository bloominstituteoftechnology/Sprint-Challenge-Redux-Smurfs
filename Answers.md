1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions carry payloads of new data that are sent from the app to update the store.

Reducers update the app's state based on the new data provided by an action.

The store is where the app's global state is stored. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and component state is local to that component. 

1.  What is middleware?
It is used to interact with actions before they reach the store's reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk is a middleware that allows you to return a function instead of an action object.

1.  Which `react-redux` method links up our `components` with our `redux store`?
Connect