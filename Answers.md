1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map .filter .concat

Object.assign will create a new object while allowing us to extend the props of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: (Actions are the HOW) Actions will allow us to use a plain JavaScript object to send data from our                     application to the store. They    are the only source of information for the store.

reducers: (Reducers are the WHAT) Reducers let us specify hoe the app state changes when actions are sent to the                store. They describe what state has changed but not how the state is changed.

store: The store is like your global state but is is only accessible to a component when it 'connected' and 'called' using `connect()()` and `mapStateToProps`.  

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is global and can be passed down to children components from the parent or called and passed through redux. 

    Componenet state lives within the component and should only live in the associated component.

1.  What is middleware?
    Middleware is a HOF that allows us to dispatch asynchronous functions within our actions.
    It allows us to interact with actions that have been dispatched to the store's reducer. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    `redux-thunk` allows us to to use asynchronous functions to allow multiple actions to fire at a time. 

1.  Which `react-redux` method links up our `components` with our `redux store`?
    `connect()()`
