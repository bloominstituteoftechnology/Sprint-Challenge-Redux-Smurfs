1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Such three javascript methods are the map, forEach and filter methods.
Object non mutating methods are .assign() .keys() and .values() methods. We can use the ...(spread) operator or Object.assign to duplicating an object without mutation.

2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are how redux handles interactive events such as a onClick button press and dispatches it's payload to the reducer.
Reducers handle the action being dispatched and update the state in the store.
The store is the unified application state.

The store is the known as the single source of truth in a redux application because it is the main source of an object's state. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is availiable globally to the entire APP while component state is lmited to be interacted with the component it is in. A good rule of thumb is to keep things as component states unless it's required that other parts of the application will need access to it.
4. What is middleware?
Middleware is optional but allows us to add extra code to be run between when actions are dispatched and sent to the reducer.
6. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk allows us to write actions that are asynchronous. It changes our action creators by introducing functionality.
7. Which `react-redux` method links up our `components` with our `redux store`?
The connect() method.