1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
 Array.map, Array.filter, Object.Assign
 We use Object.assign to create a new object while extending the properties of another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Store is the data for the app. It 'feeds' info to the components. Actions are the source for updating information in your store using inputs from the app. Reducers determine how exactly your store is updated given the Actions.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state provides information to just the given component. It is used if only that component handles dynamic information or as a temporary storeage of information that needs to be sent to the store. Application state is information that is fed down to the components.


4.  What is middleware?
 Middleware in redux is an inbetween step between the Actions and the Reducers. It can be used for logging, errors, or dispatching new actions. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Thunk allows us to return a function rather than an action. It can async calls or only dispatch if certain conditions are met.


6.  Which `react-redux` method links up our `components` with our `redux store`?
Connect
