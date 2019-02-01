1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    1.  Map, filter and assign are all methods that do not produce side-effects. Object.assign() creates a new object while extending the properties of another object.
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    1.  Store is kind of like a glabal state for an entire application. It allows all componenets to be connected to that single state without prop drilling. Actions and reducers work together as a way to access and affect store.
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    1.  Application state is global. It is good for when you want an action in one component to affect another component in a different component tree. Component state is local and can only be accessed by a component and it's children. It's good for storing things like form inputs and other data that only needs to be accessed within a single component tree.
4.  What is middleware?
    1.  Middleware is something you can place between action dispatch and the reducers to affect the data being dispatched from the action. You can use different middleware for async API calls, logging, routing, etc.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    1.  Redux-thunk is middleware that allows us to make async API calls in redux and conditional dispatches of actions.
6.  Which `react-redux` method links up our `components` with our `redux store`?
    1.  connect
