1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
*Array.map
*Array.filter
*Array.concat
*Object.assign

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
*Actions are packets of data which describe changes taking place within our application, as well as te data associated with those changes.
*Reducers calculate the new version of the state based on the current state and a given Action.
*The store contains the state of the whole application. It is known as a single source of truth because everything that changes within our application will be represented here by a single JavaScript Object.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
*Application state is kept in the store and it is best used whenever state needs to be shared by multiple components and we need to persist some data over route changes.
*Component state is kept in an individual stateful component and is best used for short-term state changes.

1.  What is middleware?
*Middleware is software that acts as a bridge between an operating system or database and applications.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
*Thunk is a middleware which allows us to write action creators that return a function instead of an action, which gives us more control over when an action is dispatched.

1.  Which `react-redux` method links up our `components` with our `redux store`?
*connect

