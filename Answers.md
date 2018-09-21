1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
The 3 array methods that do not produce any side-effects and return a new array are: .map(), .filter(), .reduce() 
The Object.assign() method is used to create a new object while extending the properties of another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
In Redux, there is a specific uni-directional flow for manipulating data. The way the flow works is by initializing a store that manages the application state and is inmutable. When there is a change in data or a view, actions are used to describe what changed. Actions are plain JS objects that must contain a type property describing the change. When an action is dispatched, a reducer is a pure function that takes in the previous state and the action object to return a new state. 

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state contains data at a higher level that is accesible to any component. A component state is local and only accesssible to that specific component. It makes sense to use application state for data that will be used by more than one component or that other parts of the application cares about the data. 

4.  What is middleware?
Middleware is a third-party extension point between an action and the moment it reaches the reducer. The most common use for middleware in Redux is to allow for Async operations like doing HTTP calls and logging for debugging.


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk is a middleware library that allows us to return a function instead of an action which is used to delay the dispatch of an action or conditionally dispatch an action. This is used to make Async calls in our action creatorss to add to our action object's payload when the action object is dispatched.


6.  Which `react-redux` method links up our `components` with our `redux store`?
The Provider component links our React components with the redux store.