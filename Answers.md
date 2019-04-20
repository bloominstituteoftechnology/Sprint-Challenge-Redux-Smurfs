1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

A: Filter, Concat, Map are all non-mutating methods. We can use map to extend the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A: The 'store' is a single source of truth because it's the global state for the entire application. 'Actions' sends the data from the application to the store. 'Reducers' relays new state changes to the 'store' that are directly from the 'actions' responses. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

A: An applications state is a a 'global' state for the entire applications. The 'component' state is local to that particular component. You would use an application state for the entire application and only use component state if only that one component needs a state not needed anywhere else in the application.

1.  What is middleware?

A: Middleware is software that allows separate programs to share data and communicate.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A: Redux-thunk is a way to dispatch asynchornous change from one state to another. It is a part of middleware and looks for actions that are functions. If an action is a function then it will dispatch it.

1.  Which `react-redux` method links up our `components` with our `redux store`?

A: The method that allows us to link up our components with our store is 'connect'. 
