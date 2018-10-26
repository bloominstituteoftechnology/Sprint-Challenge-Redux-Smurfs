1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    .map, .filter, and .reduce don't have side-effects.

    Object.assign() is used to create a new object, extending the properties of another.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are javascript functions or objects containing an action type and data, which are triggered when users interact with a website/application.

    Reducers are functions that connect our actions and our store, taking in as arguements the previous state and an action, and returning an object containing type and payload. They represent portions of the state and have the ability to replace the store, but do not directly update state.

    The store is an immutable object which sets the state. When changes need to be made to the store, a copy of it is made, altered, and then replaces the original rather than changing the original. This allows us to go back to reference previous versions of state. The store is referred to as a single source of truth because all elements relating to/including state rely on the store, and any changes to that state must be made via the store.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the state that is used within the entire application and held within the store in a Redux application. It's used to manage data that is needed throughout the application. Component state is only set and utilized/presented when it is needed within an individual component. For example, a good use of Component state was within our Friends application when component state had to be used to create a new Friends object.

4.  What is middleware?

Middleware is an extension of redux that is added to the store when it is created. An action flows through all middleware sequentially in the order it's defined before being dispatched to the reducers. Middleware modifies an action in a defined way or can halt/change the action being dispatched.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk changes our action-creators by allowing them to return functions with direct access to the dispatch method. This gives us the ability to dispatch multiple actions from a single action-creator. It also gives us the ability to dispatch actions asynchronously.

6.  Which `react-redux` method links up our `components` with our `redux store`?

Connect() is used to create a higher-order component which links our components with the redux store.
