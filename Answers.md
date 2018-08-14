1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Array.prototype.concat()
    Array.prototype.slice()
    Object.assign()
    

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are functions that return objects as descriptions sent to the reducer to describe how state should be updated

    Reducers are functions that return new versions of state according to the descriptions sent by the action. It does not mutate the previous version of state. 
    The Store is the main container of the entire state of the application. It provides methods to retrieve the current state, dispatch actions to update state, as well as subscribe to state changes

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global and can be connected to by any component but Component state is local to a component and its children only.

    If a user being logged in affected how different parts of the application bebehaved and rendered, then it would be a good idea to store data in application state. 

    If a component wanted to connect to an api and display the weather, that doesn't really affect the entire app, so the state could be stored locally inside the component  

1.  What is middleware?
  
    Middleware are functions that can intercept the actions being dispatched before they reach the reducer. They can be chained together.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    It allows us to perform async actions such as when we read / write to a network or database.

    Our action creators become functions that recieve a `dispatch` function as an argument and allows us to dispatch upon success or failure of our async requests 
    
1.  Which `react-redux` method links up our `components` with our `redux store`?

    connect()
