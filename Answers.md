1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    - `map()`, `filter()`, `assign()`. `assign()` is the method for creating a new object while extending the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - Action is a plain JS object and the change when we want to update our state and the only way to update the state is to dispatch that action and pass it to the reducers. Reducers, a function that takes in the state and the action, always returns the new state of your application. Then all of those new state changes are pass into a one giant store object and updates the app’s UI, that’s why the store is known as a single source of truth since all of your data lives in a one giant state object.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - Application state (Redux calls it the store) is a state that is available to your every component as long as they hook into it. While a component state is only available within that specific component and it can only be manipulated inside that component and passed down to its children component via props.

1.  What is middleware?
    - Middleware is a piece of software that acts as a bridge between 2 softwares. In Redux, middleware sits between our action creators and the reducers to extend the functionalities of our app.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - Redux-thunk is a middleware package that will handle asynchronous requests in Redux. It allows us to turn our action creators into async functions by granting them the ability to return functions instead of plain objects.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    - `connect()`
