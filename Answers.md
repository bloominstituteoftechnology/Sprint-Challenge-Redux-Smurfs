1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array.filter(), Array.concat(), and Object.assign()
use Object.assign to create a new object while extending the properties of another

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are data packages delivered to reducers that tell the reducer what to do. They are created by action-creators.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

App State: state is stored 
Component State: reicieves specific needed state data

1.  What is middleware?

Middleware allows us to extend the functionality that allow for promises.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

 'redeux-thunk' is a type of middleware that allows our functions to be asynchronous. Thunk gives access to the built in function dispatch for our action creators

1.  Which `react-redux` method links up our `components` with our `redux store`?

Connect Method.
