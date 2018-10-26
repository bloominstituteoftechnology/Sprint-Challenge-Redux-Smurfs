1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    .map, .filter, and .reduce don't have side-effects.

    Object.assign() is used to create a new object, extending the properties of another.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are javascript functions or objects containing an action type and data, which are triggered when users interact with a website/application.

    Reducers are functions that connect our actions and our store, taking in as arguements the previous state and an action, and returning an object containing type and payload. They represent portions of the state, but do not directly update state.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?
