1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
  Three Methods that first come to my mind are; filter(), map() and concat(). Object.assign() extends a previous to create a new object.
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  Actions are objects that hold an action type and data in the form of a payload. 
  Reducers bundle actions and then manages state with those actions
  The store is like a global state
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
  Application state refers to the global scope and the application as a whole. It is meant to hold data that isn't meant to change and is static. 
  Component State on the other hand works in the local scope and handling minor changes.
4.  What is middleware?
  Middleware is a piece of code that runs in the in-between. Middleware handles pieces of data as it travels throughout your app and is very useful for handling tasks automagically
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  Thunk changes action-creators to become asynchronous functions that can interact with servers.
6.  Which `react-redux` method links up our `components` with our `redux store`?
  connect()
