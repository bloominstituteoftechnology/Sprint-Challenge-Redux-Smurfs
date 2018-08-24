1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
map, forEach, every
object.assign
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions are payloads of information that send data from your application to your store, and they are the only source of information for the store. The store holds the entire state tree of an application on an object. Reducers listen for specific signals from the application, which then capture information and inject it into the state.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other? Application state is global and component state is local, you want to use component state to limit unwanted side effects when in specific variables
1.  What is middleware?
middleware is a software service that glues together two separate features in existing software
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux thunk is a popular middleware used to handle asynchronous actions in redux, it allows us to write action creators that return a function instead of an action, or dispatch on conditionals
1.  Which `react-redux` method links up our `components` with our `redux store`?
connect
