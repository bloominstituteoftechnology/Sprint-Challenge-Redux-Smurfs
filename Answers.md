1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Map(), concat, filter() are the methods that do not produce side effects and Object.assign() is the method used for created new objects with extended properties.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?



3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and component state is local. Component state is good for updating forms and application state is good when multiple components need to access the same data

4.  What is middleware?

Software that acts as a bridge between an operating system or database and applications, especially on a network.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met

6.  Which `react-redux` method links up our `components` with our `redux store`?
