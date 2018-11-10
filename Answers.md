1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
> Concat, Map, and Filter are objects that are non mutating methods for Redux to use. Each of these methods creates a new object, however, using map will allows us to extend the properties of another object.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
> The store is known for `single source of truth` because it is the global state of the entire application. It is where the state tree of an application that has not been changed or updated.
> Actions is information that will send the data from the application to our store.
> Reducers, while confusing are to tell the store the new state changes that are direct responses from the actions.
> Store is our House or application state holder. The store will hold our application state. Allow access to the state and a way to update our state. It will have listeners that are subscribed too and allows to register and unregister the listeners.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
> Application state is global state for the entire application. While the Componet state is local to just that component. You would only need to use Component state if the state needs to just live on that component and not needed anywhere else in the application. Application state should be used for the overall state of the application.
1.  What is middleware?
> Basic understanding is middleware allows us to interject in our application between the receiving of the application and the response genrated from our application.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
> Thunk allows us to use dispatch in order asynchronously change from one state to another. Thunk is also part of middleware and it will only look for actions that are functions. If the action is a function then Thunk will let us dispatch the action.

1.  Which `react-redux` method links up our `components` with our `redux store`?
> Connect is a way to `link-up` our components with the redux store. Otherwise there is no way to directly interact with the store. Or means to which we can retrieve data by obtaining its current state. Or change its state when dispatching an action.
