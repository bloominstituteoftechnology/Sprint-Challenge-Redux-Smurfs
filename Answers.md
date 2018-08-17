1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?

1A. map, filter, reduce. spread operator

2A.  Actions: They are used to send information to store.
        - Plain objects which must have type of action 
     Reducers: Specifies how the application state changes
        - The reducers take state and action to return a new state.
     Store: Brings actions and reducers together.
        It is known as single source of truth because the only way to change UI is to dispatch redux action which will change state within redux reducer

3A. Application state is more abstract and it makes passing data lower level components difficult

4A. Middleware intercepts actions before it reaches reducers 

5A. Redux-Thunk brings async to redux, the main change in action-creators will be our actions can do multiple dispatches

6A. connect 