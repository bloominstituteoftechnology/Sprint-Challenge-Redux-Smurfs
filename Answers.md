1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects?
    `map()`, `reduce()`, and `filter()`
 Which method do we use to create a new object while extending the properties of another object?
    `Object.assign()`
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single 
    Actions are packets of information that send data from our application to our store.
    Reducers are pure functions that take the previous state modify it with an action.
    Store is the state tree of a `react-redux` application.
    source of truth' in a redux application?
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is global to the application while Component state is local.    
4.  What is middleware?
    Middleware is a software that creates a bridge between an operating system and an application.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux-Thunk is middleware what allows us to write action creators that return a function instead of an action.
1.  Which `react-redux` method links up our `components` with our `redux store`?
    `connect()`
