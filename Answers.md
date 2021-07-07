1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map, .filter, and .reduce. As for creating a new object, Object.create()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions are exactly as they are spelled out, they take actions, and route them to reducers which figure out what to do with the action that is being sent, and pass that data up to the store. The store is the single container for all our data. A store is a single source of truth because it holds all the global state that we need for app.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    application state is a global state vs component state is a state that needs to be passed down as a chain of props. When dealing with apps that need to be able to scale, it can be hard to keep up with the flow of data with multiple components, so using application state can help with that overhead.
1.  What is middleware?
    middleware is the "firewall" of redux. it lies between dispatching an action and a reducer. It usually helps with logging info, or providing async capabilities
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux thunk is a middleware that allows for async abilities for our application. it changes our action creators by allowing us to dispatch actions based on other actions i.e. ADDING_FRIEND to ADDED_FRIEND, we couldnt have have ADDED_FRIEND without first firing off an ADDING_FRIEND call.
1.  Which `react-redux` method links up our `components` with our `redux store`?
    our connect method
