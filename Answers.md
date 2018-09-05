1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
`.map`, `.reduce`, `.filter`. `Object.assign()`
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
`actions` handles all functions, async calls, and trigger `reducers`
`reducers` handles all states of an app and sends certain states depends on executed `actions`
`store` contains `reducers`, combines middleware if any, and let any components inside an app to access to `actions` and `reducers`

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Component state is also called local state, which is handled and mutated within the component which contains it.
Application state is also refered to global state, which is handled and mutated at `reducers` and can be used across the whole app

We use component state if that state is not a condition for other components to work. If a state is a condition for multiple components to work or mount, we put that state at global level.

1.  What is middleware?
Middleware in software development, especially in Redux setup, is a third-party tool which allowed to access the transition in the middle between action and reducer (or, in another word, when dispatching an action)

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
`redux-thunk` is a middleware allows us to access actions and dispatch multiple actions. It is commonly used for async calls.

1.  Which `react-redux` method links up our `components` with our `redux store`?
`connect`
We use `connect` at the component that wants to access states
