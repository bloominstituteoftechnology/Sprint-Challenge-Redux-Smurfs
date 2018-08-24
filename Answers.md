1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? 
Map, filter, reduce and Object.assign()
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The store is where your application state lives. The state of the store is not mutated directly in Redux. Actions are commands that are triggered by a user action/event or API, and the actions are sent to a dispatcher then dispatched to the Reducer. The reducers handle the applications business logic.
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the state of the entire app at any given time. Component state is the state of a component at any given time. Application state allows for a single source of truth, while someone might want to use component state for something like input values etc.
4.  What is middleware?
middleware is software that sits between our actions and reducers and it allows us to modify/extend our actions before sending the object on to the reducer.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk allows for async calls within the synchronous Redux environment. Actions creators become promises if we use libs such as axios for async api calls
6.  Which `react-redux` method links up our `components` with our `redux store`?
connect() method
