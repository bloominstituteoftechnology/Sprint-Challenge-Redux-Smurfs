1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
        Three methods are filter, map, and reduce. The method that creates new object while extending the properties of another object is Object.assign().

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
       Actions sends data from the applitcation to the store.
       Reducers work with the actions to change the state.
       Store holds the main state. It's known as the single source of truth because it holds the main state that is used in the app.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
        Application state is used in multiple places of the app while component state is usually only used in one place.

4.  What is middleware?
        Middleware extends functionality that can stop actions and dispatch different types of actions.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
        Redux-thunk is middleware that allows asynchronous code that return a function from action creators by using dispatch.

6.  Which `react-redux` method links up our `components` with our `redux store`?
        Connect.
