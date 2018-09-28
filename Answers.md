1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- map,from, filter

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-Reducers specify how the state changes according to actions. actions are use as payloads of data that send information to the store which holds the state data;

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

-Store can hold Application state which accessible to the whole app, while Component state is only available to parenet & childern

1.  What is middleware?
 a bridge software in the application

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
-return function instead of object for api calls
1.  Which `react-redux` method links up our `components` with our `redux store`?
-connect
