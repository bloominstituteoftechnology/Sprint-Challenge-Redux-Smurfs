1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    A. Object.assign, Array.map. We use Object.assign to create a new object and extend its properties

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    A. Actions are functions that dispatch to the reducers to preform changes on our store. The store is the single source of truth because it manages the state of all of our data accross the application.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    A. Application state is shared data across all components. Component state is maintained within that component. Good example would be if we are using a component to get input from the user and need to display and retrieve data from the input fields. That would be maintained using a setState.

1.  What is middleware?
    A. Middleware allows us to make async calls to our reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    A. redux thunk allows us to dispatch which means it will wait for an action to be completed before moving on to the next call.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    A. connect
