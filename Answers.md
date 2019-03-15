1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map, slice, filter | A method you can use to create a new object while extending properties of another object is Object.assign() but I prefer to use the spread operator {...}

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are used to send data to reducers and ultimately the store. There are also action creators that are functions that are used to package up the data so you can send it off in nice chunks. Reducers are the logic that take in the actions and say what we want to do with them like push them to the store. We have been using switch/cases with them. The store is the one stop shop for application state, it is what redux uses to handle state as well as giving us access to methods such as getState & disptach.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state the entire application would need and would be handled by the Redux store. Data that multiple components would need are great candidates for being set to the store where as Component state is each components individual state handled in React with this.state{} & setState

1.  What is middleware?

Middleware can be added to intercept an action before it gets to a reducer to add additional fucntionality.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk allows us to use functions in our action-creators instead of just objects.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect
