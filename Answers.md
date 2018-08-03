1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects?
 Which method do we use to create a new object while extending the properties of another object?

assign, map, reduce

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

action: dispatch the payload of data to the store

reducers: responds to actions sent to the store and ejecutes changes in the strore

store: contains the application's state, actions and reducers

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is hold in the store and can be shared through all the app, the Component state is only accesible inside de component. 

4.  What is middleware?

is a third-party extension point between dispatching an action, and the moment it reaches the reducer, and helps to log, debug and rout when tha app neds to work with asynchronous API.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

thunk delay the dispatch of an action, or to dispatch only if a certain condition is met

6.  Which `react-redux` method links up our `components` with our `redux store`?

connect()