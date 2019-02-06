1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Filter, map, and reduce. Object.assign
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- Actions connect the app to the store.
- Reducers work with actions to update state. 
- Store - Holds the main state used across any component in the app. Known as single of truth because it holds main state used by entire app. 
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
- Component state is usually only used in one piece of the app while Applicaton state is used in multiple pieces of the app to accomplish different things. 
4.  What is middleware?
- Extends functionality of actions. Works like computer software. 
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
- Redux-thunk is a middleware that allows for asynchronous code that returns  a function from action creaters using dispatch. 
6.  Which `react-redux` method links up our `components` with our `redux store`?
- Connect
