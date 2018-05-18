1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Ans. Map, reduce, concat.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Ans. Actions is a set of instruction that execute data from application to store. Reducers are what manages state depending on what actions are sent to the store. Store is what stores the state, allows applications to have access to getState() and changing states via dispatch(action).

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Ans. App state is global state that is outside component. However component state is what inside the constructor. If you need to change state in component you used component.  
1.  What is middleware?
Ans. It some code that increasesfunctionality between frameworks. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Ans. Redux-thunk is a middleware for redux that allows us to make action creators asynchronous.

1.  Which `react-redux` method links up our `components` with our `redux store`?
ans. Connect()