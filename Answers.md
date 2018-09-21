1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Map, Filter, Concat. Object.assign

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions dispatch an object to the reducer that has a type and data. Reducers take in action and changes the state on the store based on the type and data passed to it. The store keeps the state for the app. Store store's all the data that is important and changed for the whole app. The store data can be passed into each container as needed.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is the state for the whole App. Anything that is needed across through out multiple components should be kept in the Application state. Component state is something specific to that component. It can still be passed down to the children components, but can not be passed to parent or sibling components.

1.  What is middleware?
    Middleware intercepts each action before it flows through the reducer. Middleware can stop actions, forward an action untouched, dispatch a different action, or dispatch multiple actions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux-thunk allows us to handle asynchronous operations in our action creators. It allows our action creators to have direct access to the dispatch() method.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect
