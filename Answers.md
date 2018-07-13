1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
 - Array.map, Array.filter, Array.concat
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
 - Actions are descriptions of the changes that will be taking place within our application. 
 - Reducers calculate the new version of state based on the current state and a given Action. 
 - The store contains our state for our application. The store is known as a single source of truth because it manages application state and keeps it in sync across all layers of the application
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
 - Application state is global, so you would use it when it affects the entire app. Component state only affects the component, so you would use it when only the component will be affected.
1.  What is middleware?
 - Middleware is software that adds new functionality to another piece of software.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
 - redux-thunk is a middleware. It provides the ability to handle asynchronous operations inside our Action Creators.  It provides the ability to have our action creators return functions that have direct access to the dispatch() method of the Redux Store.
1.  Which `react-redux` method links up our `components` with our `redux store`?
 - connect()