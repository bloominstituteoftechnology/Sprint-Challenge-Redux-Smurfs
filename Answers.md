1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?


1.  What is middleware?
Middleware provides us the ability to extend and perform actions in this case we're adding a step between action and reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
This allows us to write action creators that return a function instead of an action. The thunk provides benefit in the form of async processes.

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect