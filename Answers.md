1.  a. Object.assign, .concat, .map. 
    b. Object.assign 

2.  Actions - are data that acts as the only source of information for the store. 
    Reducers - respond to actions and let the store know how the applications state is changing
    Store - its brings everything together it hold the apps state and gives us access to the state with the following methods - dispatch, subscribe, and getState

3.  a. Component State is held locally within and can be passed down to other children components         through props.

    b. Application State allows access to every component no matter their relationship to each other 

4.  Middleware allows for async API calls 

5.  Thunk allows your action creators to return a function instead of just an action. This allows      you access to dispatch which can delay the dispatch of an action or dispatch the action if         certain conditions are met      

6.  connect 
