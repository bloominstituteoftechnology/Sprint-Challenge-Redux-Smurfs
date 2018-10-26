1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array.map()
Array.filter()
Array.reduce()
Object.assign()
.concat().

We would use Object.assign to reate a new object while extending the properties of another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

An `action` is a plain object that represents an intention to change the state. They are the only way to get data into the store. A `reducer` is a function that accectps an accumulation (the state object) and a value (actions) and returns a new accumulation(the state). A `reducer` must be a pure function.The `store` is a object that holds the application's state tree.

The `store` is know as a single source of truth because the state of our whole application is stored in an object tree within a single store.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and Compnent state is local. Compnent states can only be updated within that component. It would be a good time to use compnents states when you don't want one part of your application to effect another part.

4.  What is middleware?

I'ts a HOF that composes a dispatch function to return a new dispatch function. It can stop actions, foward an action, dipsatch a different action, and dispatch multiple actions.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`Redux Thunk` is a middleware that allows you to write action creators that return a function instead of an action.

6.  Which `react-redux` method links up our `components` with our `redux store`?

The `connect` method.
