1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    A: ’map()’ , ‘filter()’, and ‘concat()’ are JavaScript methods that do not produce side-effects. We can use the ’spread’ operator or the ‘Object.assign()’ method to create a new object while extending the properties of another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    A: The ‘store’ contains the state for the whole application and it's known as a 'single source of truth' because it's never rewritten. The store gives us the ability to get information and keep a clean structure for the state. We use ‘action creators’ to modify the application state using 'type' which is literally the type of action that you want to invoke and 'payload' which is what's being passed along. The 'reducers' listen to specific commands when they are called, then they get information and pass it down to the state.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    A: Application state is global, and Component state is local. Once you have too many components to keep track of, use Redux to hold the application state in the store.

4.  What is middleware?
    A: Middleware gives us the ability to interact with actions that have been dispatched to the store before they reach the store's reducer. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    A: 'Redux-thunk' gives us the ability to handle asynchronous operations inside our Action Creators.

6.  Which `react-redux` method links up our `components` with our `redux store`?
    A: createStore, Provider, and connect.
