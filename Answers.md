# Answers

1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

> The 3 JavaScript Array/Object Methods that do not produce side-effects are **.map, .filter, and .reduce**. The method we use to create a new object while extending the properties of another object is **Object.create()**.

2.  Describe  `actions`,  `reducers`  and the  `store`  and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

> **Actions** take actions and the route them to **reducers** which figure out what to do with the action that is being sent, and pass that data up to the store. The store is the single container for all our data. A **store** is a single source of truth because it holds all the global state that we need for the app.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

> **Application state** is a global state while **component state** is a state that needs to be passed down as a chain of props. When dealing with apps that need to be able to scale, it can be hard to keep up with the flow of data with multiple components, so using application state can help with that overhead.

4.  What is middleware?

>  **Middleware** is the "firewall" of redux. it lies between dispatching an action and a reducer. It usually helps with logging info, or providing async capabilities.

5.  Describe  `redux-thunk`, what does it allow us to do? How does it change our  `action-creators`?

> **Redux Thunk** middleware allows you to write action creators that return a function instead of an action. The **thunk** can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

6.  Which  `react-redux`  method links up our  `components`  with our  `redux store`?

> The **connect method** links up our components with our redux store.