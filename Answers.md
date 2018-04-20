Questions

1. Map, forEach, Reduce. Object.assign() is used to create a new object without modifying the previous one.

1. Reducers are the components that interface between the App and actions, they work to 
    help decide what needs to be done with a given state. Actions actually produce the results
    by manipulating the store based on information provided by Reducers, and the store is basically
    the state of the application - no longer constrained to only one component.

1. Scope is the diference, The difference in when to use each is very similar to when to use a local
    variable as opposed to when to use a global variable outside of a function. Depending on the scope
    you need to get the results you want.

1. Middleware can be a variety of things, but they essentially sit between your application and Redux to
    provide further functionality in some way, what this is depends on the middleware.

1. Redux-thunk allows you to call dispatches directly from reducers as opposed to having to go through actions
    this allows asynchronous actions to go through smoothly, as in when you're importing data from a server.

1. Connect is the black magic method that connects it all together.
