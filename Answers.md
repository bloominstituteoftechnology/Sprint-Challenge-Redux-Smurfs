1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Array.concat(), Array.map(), Array.filter()
    Object.assign() can be used to create a new object and extend the properties.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are objects or functions that return objects containing an action type and data associated with that type. They are triggered by user interaction and events, like loading, updating, adding, or deleting data.

    After an action is triggered, reducers determine how the state should be changed. They take in the initial state (or the state before an action) and the action that has been fired. The action type tells the reducer what to do and the payload tells it how to change the state, not by mutating the original state, but by creating a copy, changing that, and then returning a new state object.

    The store contains an object tree of the entire state, making it the single source of truth for the application at all times. Dispatching an action is the only way to affect the state inside of the store. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state would be state that is used by the entire application, whereas a Component state would only include state relevant to the single application. HandleInputChange for forms is a good place to use Component state, whereas you would want to use Application state for state used by multiple components.

1.  What is middleware?
    Middleware adds a step between actions and reducers, and gives the application a chance to stop an action, change which action is being dispatched, dispatch a different action, etc. This can be useful in the case of displaying loading screens or error messages to the user.
    
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux Thunk is a middleware that allows asynchronicity inside action creators, and allows multiple actions to be dispatched by a single creator (such as a success data get, or an error message in the event of an unsuccessful get).

1.  Which `react-redux` method links up our `components` with our `redux store`?
    The connect method, which takes in two arguments: the mapStateToProps and/or mapDispatchToProps functions and the component function. 