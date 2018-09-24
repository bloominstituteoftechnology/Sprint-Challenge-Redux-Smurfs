1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    `Array.concat()` | `Array.map()` | `Array.filter()` & `Object.assign()`
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are the directions given to the reducer that are triggered by external input. Reducers directly manipulate the state to a new version based off what was recieved from the actions. The store is a read only state machine for the application.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is handled globally in the Store. Component state is local to the component it originates from.
1.  What is middleware?
    Middleware extends the functionality of your Redux environment which can effect the actions before it hits the reducers.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux-thunk allows us to handle async requests.
1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect
