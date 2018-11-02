1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    .map, .filter, .concat. 
    object.assign
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Action are used to make changes to the store reducers, look at the actions, and manipulate the state.
    The store prevents us from having mulitple states and repeating.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is what is in the redux store. Componenet state is outside the store and on the class components.
1.  What is middleware?
    Middleware goes between actions and reducers. It is used to dispatch action in multiple ways. Or stop them.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux-thunk is middleware that allows us to dispatch actions. It changes them by letting us use the dispach method.
1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect
