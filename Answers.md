1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Map
    Filter
    Reduce
    We can use .concat to create a new object with all the properties of the old one.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are the way we send data to the redux store.
    Reducers are how we define the way the state in store changes.
    The store holds the state for our redux app.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Component state is the state that is only stored locally within the component that deals with it, application state is state that is held in a store as in redux, and is available for all components in the app.
    Component state is good for keeping our components compartmentalized and keep all our data only in places where it makes sense for them to be, however in much larger apps, where different components might be sharing the same state, we would probably want to use Application state, in some cases, for example to give the same state to two child components of two seperate parent components.

1.  What is middleware?
    Middleware intercepts actions before they reach our reducers and applies its own logic to them, providing new functionality.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Thunk allows us to return a function in our action creators that can let us return multiple actions asynchronously

1.  Which `react-redux` method links up our `components` with our `redux store`?
    <Provider>
