1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
  .map, .filter and .reduce do not produce side-effects, but instead, will produce new arrays. We can use concat to extend the properties of an object and copy it to another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  Store contains the global state of the application - it is immutable, but can be replaced with new data. Actions are basically a map that tells redux what it needs to do for each reducer, while Reducers are the functions that handle each action and replace the Store.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
  The application state is the global (store), while the component state is the local, more specific state defined in the app's components. For smaller projects, where state and props don't need to be passed down many levels or branches, it is better to use Component State. For larger apps, where you would need to pass props down multiple levels and branches, it is better to use the Application state.

4.  What is middleware?
  Middleware is a way of interacting with actions before they hit the reducer. The best way I can describe it is by example: A middleware can consist of a function that will turn all strings to lowercase before they get assigned to the store.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  Redux-thunk is a middleware that handles async actions, returning them as functions that can be called to directly.

6.  Which `react-redux` method links up our `components` with our `redux store`?
  `connect` will allow us to link the components to our redux store, otherwise, React will not have the store data available.

