1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
A: Concat, map, reduce, and filter. The method we use to create a new object while extending the properties of another object is Object.assign().

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
A: 
(1) Since the state in Redux is read only the only way to change the state is by dispatching an action, which is a JavaScript object describing the change.
(2) Reducers take the previous state and the action being dispatched and returns the next state of your application.
(3) The store is where the state for the application is contained and is known as a single source of truth because it is the only place that represents state of the application.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
A: Your application state is global (like in Redux), and your component state is local (like in React). Use component state when the state doesn't matter to the app globaly and application state when it does.

4.  What is middleware?
A: Middleware is an extension point that allows us to add functionality to Redux. It is placed between the action and the reducer in a traditional Redux application flow and intercepts every action before it flow through to the reducers. Thus it can stop actions, dispatch multiple actions, etc.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
A: 'redux-thunk' is a package from redux that allows us to return a function that has direct access to the dispatch method of the Redux {store} inside of our action creators instead of the typical object.

6.  Which `react-redux` method links up our `components` with our `redux store`?
A: connect()