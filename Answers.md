1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

3 arrays that don't mutate the original array
    array.find
    array.map
    array.forEach

methoed used to extend.. extends





1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions - actions represent the possible state transitions in your application. they are messages that will be sent to           the reducer to perform some action.  
    reducers -reducers represent the logic layer in the cycle. this is where operations will be performed and state will             be set and returned. 
    store -  the store is a centralized repository for holding appliction data. following the redux pattern ensures that            all application state manipulation takes place in the reducer which means all data in the store acts as the            single source of truth.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    component state is local to just that component, where as application state can be accessed by any connected component. in general you would use application state to share data between disconnected components and component state for local operations, such as a form.


1.  What is middleware?
    middleware in respect to redux, is  software that sits between the action creater and the reducer. you can use this middleware layer to intercept actions perform logic and dispatch new actions. 


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux-thunk is middleware that allows us to make asynchronous calls.


1.  Which `react-redux` method links up our `components` with our `redux store`?
    createStore creates the store and Provider wires it up.