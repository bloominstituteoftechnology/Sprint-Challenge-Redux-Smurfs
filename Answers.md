1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
      The three Array methods
        .map()
        .filter()
        .concate()
      The object method that extends the properties of another object while creating a new object
        Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  Store - is where out state is is stored and all the components that need the use of that state pull it from there. It is known as a single source of truth because everything that changes in the application is represented in one single JS Object.

  Action - Actions allow us to dispatch different types of actions and any data associated with it.

  Reducer - Reducers take the current state and the action that was dispacthed to it and then recalculates the new state of the application.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
  Application State encompasses the whole application, while Component State is only available to that specific component in which it is created in.

1.  What is middleware?
  Middleware is small blocks of code that intercepts an action, runs the code and then it is dispatched to all the reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  It returns a function and it allows us to dispatch asynchronous requests because it gives us direct access to the dispatch() method. It changes out action-creators because now it allows us to dispatch multiple actions from a single action-creator.

1.  Which `react-redux` method links up our `components` with our `redux store`?
  connect()()

  written in the following format: 
  export default connect( mapStateToProps, {mapDispatchToProps} )( component )
