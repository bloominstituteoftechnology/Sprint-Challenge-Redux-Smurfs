1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
> * Object.assign() --> This is the method to create new object while extending the properties of another object.
> * Array.slice()
> * Array.concat()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
> * `actions` is the functions that tell redux when the state needs to be changed. These functions pass to the reducer the type of change and the data that needs to be changed.
> * `reducers` is the function that receives the information from actions, then use this information together with the current state to return a new state object. Reducers never mutate the state directly.
> * `store` is where the state of the application is held. The only way to to change the state in store is to use actions and reducers.
> * The store known as a `single source of truth` because the state of the whole application is stored within a single `store`. This allows us to manage our state better, and enable us to do something like time travel functionality.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
> Application state is for the whole application to access, or global. Component state is only for that specific component, or local.

1.  What is middleware?
> Middleware is a third party module that allows us to perform some action between dispatching an action and the moment it reaches the reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
> `redux-thunk` can be used to perform asynchronous dispatch for redux actions. action creators take an action, and returns a function to perform a dispatch only if some conditions are satisfied.

1.  Which `react-redux` method links up our `components` with our `redux store`?
> `connect` method.