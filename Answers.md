1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Object.assign, push, concat. Object.assign.
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    A store is known as a single source of truth in a redux application because the store contains the reducers, state, actions in our application. The store is where the application state, reducers, and actions exist. We dispatch an action to the reducers to update the state of the application.
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is state inside the store, it's the overarching state that can be provided. Component state is state that just resides on each component.
4.  What is middleware?
    Middleware provides an extension point between dispatching an action and when it reaches the reducer, so things like logging or async API are what middleware is used for.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux thunk allows us to write actions in terms of returning functions, instead of an action.
6.  Which `react-redux` method links up our `components` with our `redux store`?
    connect!
