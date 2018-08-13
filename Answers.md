1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Object.assign() creates a new object in memory and it takes other objects as its arguments to have those properties. Array.prototype.slice() creates a shallow copy of an array. Array.prototype.concat() is another method that attaches two arrays together and returns a new array. Can use the spread operator to replace Object.assign, slice(), and concat().

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions tell the store that something needs changed, the store then tells the reducer, do something depending on the given action. The reducer then assigns the next state for the store to have. The store keeps track of all the history and has all the state in the application. This is useful for debugging purposes because of time traveling and other components can ask the store what is the state of a component whose state is not easily accessible.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the global state. That means any component can access the state of other components if needed. Component state is the local state, which means that it keeps track of its own state. Local state is fine if the state does not have to be passed down so many times, or if another component that is not its child, need to know the state of the current component.

4.  What is middleware?
Middleware does something with the action that gets dispatched before it reaches the reducer. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk allows for asynchronous calls to a server because redux by itself is synchronous. It lets us make GET requests or any requests that is needed.

6.  Which `react-redux` method links up our `components` with our `redux store`?

The connect method
