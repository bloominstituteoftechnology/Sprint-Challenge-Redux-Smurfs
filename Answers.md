1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    - map(), filter(), concat(), object.assign()
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - actions describe what we wish to do to an object
    - reducers use the description form the action to execute and update our state
    - store contains all of our actions and reducers; it allows us to access those things from within our application
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    
1.  What is middleware?
    - middleware sits between our actions and reducers to check if the arg is an object or a function
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - thunk is a term for a callback function in redux; it allows us to do async processing
    - it checks what the action-creators are passing and determines if thunk should execute or the immediately the reducer
1.  Which `react-redux` method links up our `components` with our `redux store`?
    - connect links our application with the store
