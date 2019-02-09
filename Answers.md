1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Array.map(), Array.filter(), and Object.assign(). Object.assign() is used to create a new object while extending the properties of another object.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    The `store` keeps all the state of the app in one place, which is why it is known as the 'single source of truth' in a redux app. The `actions` calls the dispatch function, sending it an object which is then sent to `reducers` that translate that action object into altering the state of the app.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is the state of the app, global information that all components can be concerned with whereas componenet state is state that only a specific component is concerned with.
1.  What is middleware?
    Middleware processes `actions` before they go to `reducers`.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    `redux-thunk` is a library that allows us to utilize async data in our redux application by giving us use of the dispatch function in our `action-creators`.
1.  Which `react-redux` method links up our `components` with our `redux store`?
    The `connect` `react-redux` method links up our `components` with our `redux store`.
