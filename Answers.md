1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    .filter, .map, and .reduce do not produce any side effects because they output a new array with applied logic rather than applying logic to the original array


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Store sets the state for the WHOLE application, it can be accessed from anywheere in the object tree, and this is why it is called a single sourece of truth -> 
    Actions tell us something changed -> 
    Reducers handle those actions and replace the store.


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    The application state is global and it gives all components access to the data and when using redux it is the 'store', while component state is local to the component. For simple applications it might be better to use component state instead of setting up redux


4.  What is middleware?
    Middleware is an extention for redux. it adds new functionality by intercepting every action before it flows through the reducer. It can stop actions, do nothing, dispatch a different action, or dispatch multiple actions


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    'redux-thunk' is a function that wraps an expression to delay its evaluation. it also lets you write action creators that return functions instead of an action. The inner function of thunk recieves the methods dispatch and getstate as parameters.



6.  Which `react-redux` method links up our `components` with our `redux store`?
    connect links the components to the redux store. it is used to give components state though passing props from the store. 