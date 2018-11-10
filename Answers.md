1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Map, Filter, Concat. We use Object.assign() for that functionality.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions explain what type of reducer we need and the data we're sending to our reducers, reducers take that data and return a new store based on the sent action, the store is our application state and contains all the global data we need.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the global state of the application which is information that will be required across the App. Component state is information local to the component only required by that component and likely passed to an action. Like form data.

1.  What is middleware?
Middleware, in redux, is functionality which hooks itself in between the action and the reducer allowing us more control over the actions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk is a middleware which allows us to send fuctions with asychnronous actions and send the proper action types as the action runs. It changes the action-creators by no longer simply returning the action type and payload

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect. Which is a HOC which calls our mapStateToProps function to gather the items we require from the state (store, pulled from the Provider HOC) and then passes along all the requested data and actions into our component.
