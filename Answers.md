1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.filter(), .map(), and .concat(). The .map() array method is used to produce a new array with properties extended from a constructed object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Redux Actions are payloads of information that send data from an application to a store.
Redux Reducers specify how the application's state changes in response to actions sent to the store.
A Redux Store holds a whole state tree of an application. The store is the only source of data for the application, which is why it is referred to as the 'single source of truth'.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

A component state is stored locally within a component and is not accessible from other components unless it’s explicitly passed as props to it’s sub components.
A redux, or application, state is a centralised global store which is accessible to any component that subscribes to the store.
There are a few reasons not to use an application state. For example:
  - No encapsulation. Any component can access the data which can cause security issues.
  - Boilerplate code. Restricted design.
  - As state is immutable in redux, the reducer updates the state by returning a new state every time which can cause excessive use of memory.

1.  What is middleware?

Middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. Developers use middleware for logging, crash reporting, talking to an asynchronous API, and routing.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

1.  Which `react-redux` method links up our `components` with our `redux store`?

.connect()
