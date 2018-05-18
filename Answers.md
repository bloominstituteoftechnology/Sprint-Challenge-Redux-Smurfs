1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
map, filter and reduce.
object.assign.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
`Actions` When a user clicks on something the action will tell Redux that something has happened.
`Reducers` reducers take those actions and reduce our state into a new state based on that data.
`store` is the central location where all the state lives in Redux.  This is the key difference between React and Redux. AKA the single source of truth.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
The Application state is global whereas the Component state is local.  So Application state can be accesed anywhere in the app but Component state is confined to that component.  The Application state is held in the store in Redux.

1.  What is middleware?
Applications or functions that extend functionality of certain packages.  A piece of code that sits between or original package and newer functionality that we want.
Since Redux is synchronous so middleware such as Redux-Thunk allow us to work with promises which are performed asynchronously.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
`Redux-thunk` is a middleware that allows us to work with asynchronous actions in Redux such as promises.  

1.  Which `react-redux` method links up our `components` with our `redux store`?
Connect connects them all together.
