1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Three objects that do not create side effects are .map , .filter and .concat. .map returns a new array with the values  of the function passed through. .filter returns a new array with specific values conditioned in the function. .concat returns a new array which combines the two previous array. The method we use to create a new object is the spread operator.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that return an action type and a payload which is usually data of some sort. Reducers take in an action and returns a function to proceed with some sort of event such as adding a new data into the server.  Store is where the application state lives and it is an immutable part of the redux code. Store is the single source of truth because it contains the original data of the state and never changes. It is only cloned and the cloned object is what changes.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global which means any component in the app can have access to it. Component state is local which means only that specific component needs to access it. Component state is good for forms whereas appplication state is good for holding the data that the whole app needs.

4.  What is middleware?

Middleware is a programming tool to intercept a process which either allows the process to continue or start a different process.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is an middleware that allows us to use asynchronous programming in our React Redux application. It allows our action creators to make API calls.

6.  Which `react-redux` method links up our `components` with our `redux store`?

The connect method links up our components to our redux store.
