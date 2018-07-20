1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
   .map, .filter, and Object.assign produce no side effects. Object.assign can be used to create a new object while extending the properties of another object.
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  Actions in Redux are packets of information that contain an action type and some data that we want associated with that action type. Reducers calculate the new version of state based on the current state and a given action. The store is a single Javascript object which represents everything that changes within an application. The store contains the state for the application.
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
 
4.  What is middleware?
  Middleware is software that sits between two pieces of software in oder to extend functionality.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
6.  Which `react-redux` method links up our `components` with our `redux store`?
