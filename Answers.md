1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
A: Three Array/Object methods that don't produce side-effects are: .filter, .map and .reduce.  Object.assign is a method we can use to create a new object with the properties of the another object.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
A: The store holds the state for your entire application.  Actions are triggered when someone interacts with our app.  Actions let us know that something has changed.  Reducers take those actions and communicate them to the store.  Reducers are pure functions that act as the go between of actions and the store.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
A: Application state is the global state of all of your components.  Component state is local and limited to that component only.  Using one over the other depends on what you are trying to do.  If it is something that you don't need access to elsewhere, you should consider using component state.  
1.  What is middleware?
A: Middleware is an extension of Redux that allows for more functionality.  Through middleware, we can stop actions, forward an action, dispatch a different action or even multiple actions at the same time.  
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
A: Redux-thunk provides the ability to handle asynchronous operations within the action creators.  It gives us the ability to have the action creators return functions that can use the dispatch method of the store.   
1.  Which `react-redux` method links up our `components` with our `redux store`?
A: the Connect method.