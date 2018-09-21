1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
map(), filter(), and reduce don't produce side-effects. We can use concat() to create a new object while extending properties of another.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Reducers are essentially events. They can be called from any component to change the state. Actions are the data being formatted and fed to reducers. The store is where the global state is kept, making it the "single source of truth."

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global and held in store; it should be used for data that needs to be persistent or at least stored locally for a period of time. Component state is held in individual React smart components; it should be used when data isn't needed for long.

1.  What is middleware?
Middleware are extensions that add expanded functionality to redux.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk is a piece of middleware that allows asynchronous function calls. It changes action-creators by allowing them to pass functions instead of actions.

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect() links components to the store.