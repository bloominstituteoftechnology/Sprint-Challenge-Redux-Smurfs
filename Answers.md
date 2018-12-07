1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    - map(), filter(), concat(), object.assign()
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - actions describe what we wish to do to an object
    - reducers use the description from the action to execute and update our state
    - store contains all of our actions and reducers; it allows us to access those things from within our application
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    = Application state would be a global state while Component state is local; if something needs managed only within the component we should use a component state and if the props are meant to be used by several components we should be using a global state
1.  What is middleware?
    - middleware sits between teh dispatch and reducers, it allows us to change our dispatch prior to going to the reducer
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - thunk is a middleware that allow us to call action-creators that return a function instead of an action-object
    - it checks what the action-creators are passing and determines if thunk (function) should execute or the reducer
1.  Which `react-redux` method links up our `components` with our `redux store`?
    - 'connect' links our application with the store
