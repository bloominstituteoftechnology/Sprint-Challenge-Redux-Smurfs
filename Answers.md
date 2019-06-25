1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
.map, .filter, .reduce. Object.assign()
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions are a sign that something has changed within our application. Reducers take action(s) and the store(state) and return a new copy of the state. The store is our global state within the application.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the global state held by store in redux. Component state is the state held within a single component, usually only used for boolean toggles.
1.  What is middleware?
Software that adds functionality to the application 
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?
connect
