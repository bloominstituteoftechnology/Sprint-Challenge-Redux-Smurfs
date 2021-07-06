1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    *   slice()
    *   spread operator [...]
    *   Object.assign() 


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    *   **ACTIONS:** You change state by dispatching an action.  

    Actions are plain javaScript objects that *only describe* what happended with a *type* field.  Commonly created by use of *action creator* functions.

    *   **REDUCERS:** Functions where all the logic that changes state are.  

    These take in state and an action as parameters, and *return the new state.*  Reducers must not mutate state.  A root reducer nests multiple reducers wihtin, able to call other reducer functions to split-up the workload of updating state.  Redux provides this built-in with combineReducers. 

    *   **STORE:** A single source of truth that manages all an application's current state data in one place, called a store.  Stores have 3 primary methods.  
        *   dispatch() Starts a state update with the provided action object.
        *   getState() Returns current state.
        *   subscribe() Accepts a callback function that will run everytime an action is disptached.
    Store contains the reducers, and receive the actions, returning the new state to the UI.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    *   Application state is global, and can be accessed from anywhere in the app, assuming it is connected in to that component.  
    *   Component state is local, living on a specific component.  Only that component can update that state, and passes it's data down to it's children thru props. 
    *   Component State is good for storing temparary values like form input values or toggling a boolean value.  
    *   Application State (redux Store) is good for storing longer term data.  If you need to pass props to far down, or unrealted components need access to the same state, or state changes need to be tracked, would be good times to use App State.  If you have a large app with many states, a single source of truth helps mitigate errors in data handling.


1.  What is middleware?

    *   Provides ability to run code after action and before reducer.  Can pass actions on, restart dispatch, and access store state.  Good place to manage servers.  *applyMiddleware* params are middleware, returns store enhancers, then passed to *createStore*. 


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    *   Ability to pass functions to dispatch().  Useful for multiple dispatches or conditional dispatches based on store state.


1.  Which `react-redux` method links up our `components` with our `redux store`?

    *   **connect:** wraps the component that need to talk to the store, or subscribe, or listen for changes, from the store.
        *   takes in 2 optional arguments.
        *   **mapStateToProps()** 
            *   It recieves whole store state, should return obj of data.  
                Each field in returned obj becomes a *prop* for the wrapped component!
            *   Called everytime the store state changes

        *   mapDisptachToProps() Called once on component creation.
            *   Note: you can use an "object shorthand", and just pass an object of action creators instead of an actual mapDispatchToProps function

    *   **Provider</>** component makes the store acessible to connected components, when you wrap the root component.