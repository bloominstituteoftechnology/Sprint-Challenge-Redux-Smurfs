1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Object.assign(), map(), and ,filter() do not produce side-effects. Object.assign() creates a new object while extending the properties of another object. 
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are like events that assign a type and payload to an event. Reducers take in actions by type and produce copies of the state. Stores holds all the state for the application. Store is the single source of truth because it holds all the state.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the most important, it contains all data that has meaning across the application. Component state is used sparingly to hold data for a single component, mostly it is for handlers and small pieces of data that does not need to be immutable.
1.  What is middleware?
Middleware is used to intercept actions before they flow to reducers and do something to those actions or run different actions. 
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is a middleware used to make asynchronous calls in the action creators, which are normally synchronous in Redux. 
1.  Which `react-redux` method links up our `components` with our `redux store`?
connect