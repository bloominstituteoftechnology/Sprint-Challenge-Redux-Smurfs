1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Map, filter, concat. We can use the spread operator for a shallow copy.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions trigger reducers which return a complete copy of the overall state. The store is only accessible to the reducers and is available to all parts of the code that request it.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state refers to the overall redux state, while component state is useful for other things, such as when taking in data from the user in preparation to send it to the redux overall state.

4.  What is middleware?

Middleware works as a bridge between the redux and the applications.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to have an action return a function instead of an action.

6.  Which `react-redux` method links up our `components` with our `redux store`?

'connect' does this.