1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    .filter and .map are array methods that create a new array without modifying the original, so do not have side effects. Object.assign() is a method with no side effects that can be used on objects, and can be used to create a new object that extends an older one, but the spread operator (newObj = {...oldObj, newKey: newValue}) may be preferred now that it exists.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The store is a place for storing application-wide state, and is called the "single source of truth" because any component can have access to it (without prop drilling). Reducers are functions that take in the store and modify it depending what kind of change is needed to state, and actions are functions that react to changes in the app and tell reducers what kind of change is needed (generally by passing the rerducers an object, although middleware can complicate this).

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is information about state for the whole application, and can be kept in a centralized place (like the Store in Redux apps); components state is state that is local to a component (and possibly its children), and shouldn't be used by sibling or ancestor components. If information is going to be used by more than one component, it can be a good idea to keep that information in application state.

1.  What is middleware?

    Middleware is a function or series of functions that intercept information between actions and reducers, modfifying or using that information in some way.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk takes in action results that are functions rather than objects, and processes them into objects before passing them to reducers -- but in doing so, it allows the actions to perform asynchronous programming.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    connect()
