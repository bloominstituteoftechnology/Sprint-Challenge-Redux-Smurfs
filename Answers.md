1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
- Object.assign(), Array.concat(), and Array.filter()
- we use Object.assign to create a new object while extending the properties of another


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- actions are data packages delivered to reducers that tell the reducer what to do, and these are created by action-creators

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
- reducers are functions that take in, as arguments, a previous state and an action, and return an end state. They are the only way to change the state tree.
- store holds the application's state tree, along with useful methods to interact with the state tree like getState(), dispatch(), and subscribe().
1.  What is middleware?
middleware is code that executes in between the creation of an action and the dispatch of that action to any reducers. The actions pass through middleware.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk allows us to make our actions asynchronous

1.  Which `react-redux` method links up our `components` with our `redux store`?
the connect(); method which is a higher order function