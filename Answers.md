1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
.map()
.filter()
.slice()

Object.assign(), but you can also us the ... spread syntax.


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The store is where all of your global or application state eis stored. Actions are called using events and they notify the reducers that a change to the store's state is desired. The reducer makes the change to the store's state.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the state in the store, and it's good to use it when that state may be necessary globally in multiple locations throughout your app. Component state is state that exists only in a single component branch, and a good use case is for controlling the information taken in from input fields.


1.  What is middleware?
Middleware is curried functions, it allows things to happen between when an action is called and state is changed.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
`redux-thunk` is a middleware that allows us to return our actions as functions, which allows us to return actions asynchronously.

1.  Which `react-redux` method links up our `components` with our `redux store`?

{Provider}
