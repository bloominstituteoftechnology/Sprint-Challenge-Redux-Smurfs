1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
  - Array.map, Array.reduce, Array.filter
  - [...] (Spread Operator) OR Object.assign{[target], [source]}

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  - Actions are small objects that detail what (type) of changes should be applied and what the change should be (payload). Reducers are the logical machines that scan action inputs to find relevant types and data to manipulate and then push to all connected Components. The store is the object that holds all of the reducers and connects them to their components. All state for an application is maintained by the reducers held in the store, and all changes to state for an application must come from the reducers held within the store and most importantly there are many reducers and many actions but only ONE store for any given application.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
  - Application state refers to the overall state of the ENTIRE application (very redundant use of language to define app state but I can't think of a better way to put it) rather than the state of one individual component within the application. It's the sum of the parts rather than the parts themselves. Once you have too many components to keep track of, bring in Redux and hold application state in a single store.

4.  What is middleware?
  - Middleware is the layer between action creators and reducers that can potentially interact with APIs or other outside sources of data to dispatch to the reducer for processing and providing a more informed response to state change.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  - Redux-Thunk brings in the middleware that allows us to create "asynchronous" actions
  
6.  Which `react-redux` method links up our `components` with our `redux store`?
  - Connect
