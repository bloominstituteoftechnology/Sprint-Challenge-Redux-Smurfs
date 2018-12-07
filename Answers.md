1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
You can use array.slice() to create a copied array. To copy an object, you may use Object.assign(). Alternatively, you may use the spread operator (...) to copy values from an object or array.
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The store is a container for all of the state in your app. It completely takes care of managing the state for you. Reducers are functions that the store uses to modify your state. Reducers are passed in actions through the dispatch function. Actions are objects that tell the reducer what changes to make when certain events happen.
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global state that can be handled by redux. Component state is local state that is held in each component. It is best to put state that may change often (like a form input) in component state, while you put data that is less likely to change (like responses from a server) in application state.
4.  What is middleware?
In redux, middleware is any function that is between your action creator and reducer. If you have middleware in your app, your action creators will be processed through the middleware functions before they are dispatched to your reducer.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk is middleware that allows our action creators to return functions as opposed to objects. It helps us when we want our action creators to do something asynchronous, like make an ajax call.
1.  Which `react-redux` method links up our `components` with our `redux store`?
The connect method
