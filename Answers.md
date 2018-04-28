1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Object.assign
    array.map
    array.slice

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions: actions are used to dispatch data to the reducer. 
    reducers: reducers are used to alter the store
    store: store is a "global" state that is accessible by all app components

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    application state: state that exists application wide and can be accessed by any component within the react app via the store
    component state: state that exists primarily within a single component; while you can pass the state between components it's better to use redux store and application state in order to render data that is required throughout the application.

1.  What is middleware?
    Middleware is defined by it's name it lives in the middle of your applications which alters how redux manipulates the store and state.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux-thunk is a middleware that hijacks the dispatch action and allows the developer to call dispatch directly within the actions; without redux-thunk dispatch is called automatically using the connect function that react-redux provies.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect links components with the redux store.
    
1. (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second `getSmurfs` request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?