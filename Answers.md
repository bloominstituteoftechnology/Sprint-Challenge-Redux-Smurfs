1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
map, concat, Object.assign. also Object.assign

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Store is where your initial state lies, it is known as the single source of truth because it is immutable. actions are packets of information that send data from your application to your store. A reducer is a function that is used to reduce a collection of values down to a single value.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the store, or a global state. and component state is more of a local state. 

1.  What is middleware?
Middleware is a higher-order function that composes a dispatch function to return a new dispatch function.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
 It provides the ability to have our action creators return functions that have direct access to the dispatch() method of the Redux Store.

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect