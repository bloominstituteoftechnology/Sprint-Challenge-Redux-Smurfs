1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Map, Reduce, Filter. Object.assign is a method that creates a new method with extending the properties of another object Object.assign({}, oldObject, property: overwrittenValue);.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are sent to trigger a specific reducer and depending on the type of action the reducer will do a specific thing to change the state. The store holds reducers. The store is the single sorce of truth becasue that is where the state is and where it updates.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is usually data driven and Component state is usually driven by the UI. A form is a good example for using component state over Application state, or a toggle that triggers a change in the UI.

1.  What is middleware?
 Middleware in redux takes an action and does something to it before it is sent to the reducer. It is a function.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux Thunk is a middleware that allows you to pass in functions to blank instead of object so we can run asynchronous JavaScript.

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect