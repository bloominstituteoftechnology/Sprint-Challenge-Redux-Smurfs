1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map, filter, reduce. map creates a new object and extends properties of the OG.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that describe what should change about the data. Reducers are pure functions that are designed to manage specific parts of your state object. The store holds the data. Store is the single source because it gives us the availability to easily retrieve information in constant time and maintain a clean structure for the state of our application

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

React holds state in components. Redux holds it in the application. Component state is passed down through props whereas application state is available globally. A good example for component state is input on a form. Vs user info for app state.

4.  What is middleware?

Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

See above

6.  Which `react-redux` method links up our `components` with our `redux store`?

connect