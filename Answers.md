1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Filter, map, and reduce (I think?). We use map.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

In Redux, the state of the application lives on the store. The only way to modify data on the store is through reducers and the only way to trigger reducers is to dispatch actions. Which means that to change any (state) data one must dispatch an action.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and component state is local. Redux allows for all components to be able to access (and change) Application state but state stored at the component level is basically read-only to any entity that is not that actual component (which can have write-access).
 
4.  What is middleware?

Middleware is a software layer that runs between two other software programs. It provides some kind of data manipulation between the other software programs/layes. In redux, middleware provides a way to interact with actions that have been dispatched to the store *before* they reach the store's reducer. Use cases for middleware in redux include logging actions, reporting errors, making async requests, and dispatching new actions.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.

6.  Which `react-redux` method links up our `components` with our `redux store`?

connect

