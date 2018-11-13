1.(Q)  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

1.(A) map, concat, and every. Define an object constructor to create a new object and use super to extend the properties. 

2.(Q)  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

2.(A) The store is the heart and sole of redux.

Actions are js objects that have two properties: type and payload. They send data from our app to the store. They are the only source of info for our store.

Reducers are pure functions that take in the current state and an action and return a newly updated state. Each reducer only manages a single property of our app state.  
The state tree is changed through actions via reducers, which are just a special type of function.  This function takes in an action and the current state; and returns a new, updated state. 
It does not mutate state. It will always return the same output (return) as the input (arguments). 

The store is a single source of truth because it is the place where state resides and it is immutable. 

3.(Q)  What is the difference between Application state and Component state? When would be a good time to use one over the other?

3.(A) Component state only exists inside one component. Application state can exist across all components. Meaning all the components in our app can have access to it if need be.

4.(Q)  What is middleware?

4. (A) Middleware is typically third party software that is injected into the redux lifecycle. It can have a variety of uses. a middleware function is a function that returns a function that returns a function. 
The first function takes the store as a parameter, the second takes a next function as a parameter, and the third takes the action dispatched as a parameter. 
The store and action parameters are the current redux store and the action dispatched, respectively. The real magic is the next() function. 
The next() function is what you call to say "this middleware is done executing, pass this action to the next middleware". In other words, middleware can be asynchronous.

5.(Q)  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

5.(A) By default, Redux action creators don’t support asynchronous actions like fetching data, so here’s where we utilise Redux Thunk. Thunk allows you to write action creators that return a function instead of an action. 
The inner function can receive the store methods dispatch and getState as parameters. Thunk allows redux to be asynchronous. 

6.(Q)  Which `react-redux` method links up our `components` with our `redux store`?

6.(A) Provider is used to connect our components to the redux store.