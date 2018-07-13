1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Array.concat()     Array.map()       Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why
 is the store known as a 'single source of truth' in a redux application?
Actions are objects that describe the information about changes to state by dispatching actions. They 'connect' to components. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is a single source of state for the entire application. Component state deals with state that pertains to each component.

1.  What is middleware?
Middleware is in between the actions and reducers. Middleware allows for more flexibility such as stoping actions, dispatching different actions, and dispatching multiple actions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Reduce-thunk is a library that allows for asynchonous operations using currying and closure. It's used to return a function from out action creators and we can decide when to call the dispatch. This is commonly used with CRUD operations.

1.  Which `react-redux` method links up our `components` with our `redux store`?
The Provider.