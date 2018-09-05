1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? 

concat, map, filter. We used Object.assign


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: are events triggered by the UI or function invocations that have a type and instructions on how the state needs to be modified called payload. 

Reducers: Functions that take in the initial state and the action that was dispatched, and return a modified state based on action type. 

Store: This is where the state/data for the whole app lives. We can use the connect method and helper function mapStateToProps to 'connect' any component with the state that may want to be concerned with. 


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the state that exists in the redux store and component state lives on a given component. A good time to use component state is when we are dealing with data that may be exclusive to only one part of the UI such as an input field. 


4.  What is middleware?

Middleware like thunk allows us to use redux asynchronously with the use of promises. Logger is another middleware that allows us to log out actions, and previous/next state to the console.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Allows us to asynchronous. It allows our action creators to return a function that dispatches action objects based on the result of the promise, instead of an action object directly. 


6.  Which `react-redux` method links up our `components` with our `redux store`?

Connect. 