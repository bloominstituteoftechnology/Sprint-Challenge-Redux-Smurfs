1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

A) Map, Filter, Concat

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A) Actions are payloads of information sent to the store, they are plain javascript object, they should have type property to show what action is being performed
    Reducers specify how the application's state changes in response to actions sent to the store
    The Store is the object that brings them together(getState(); ,dispatch , subscribe)

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?


1.  What is middleware?
It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux Thunk middleware allows you to write action creators that return a function instead of an action.
The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store 


1.  Which `react-redux` method links up our `components` with our `redux store`?
connect
