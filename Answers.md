1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Array.slice, Object.assign, Array.concat. Object.assign is used to create a new object while extending the properties of another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are sent by the program to signal that something in the state of the application may need to change and to provide information about that change. Reducers receive the actions and convert them to a new version of the application's state based on their business logic. This new state is then saved to the store. The store is known as a single source of truth because it is a single, plain JS object that contains all significant state information, and can be accessed through the child components of the root node on which the store is defined.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is held in the store and is managed by Redux, and will be identical across all components and must be accessed via Redux methods. Component state is managed by React and encapsulated to the component itself, not being available outside the component, or after the component unmounts. Application state is useful for information that is useful in multiple components or is useful beyond the lifecycle of the single component, whereas component state is useful for dynamic info that is only useful to that component while it is mounted.

4.  What is middleware?
Middleware is a function that wraps around Redux's store.dispatch, and allows an action that has been dispatched to be read and possibly manipulated prior to it arriving at the store. Middleware can be chained.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is middleware that allows store.dispatch to process functions that create action objects and call store.dispatch themselves, rather than only processing action objects directly. This changes our action-creators by giving them the option to return such functions.

6.  Which `react-redux` method links up our `components` with our `redux store`?
connect
