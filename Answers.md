1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Object.assign(), Array.map() nad Array.filter(). Object.assign() makes a new array and extends the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The store, stores these other functionalities. The actions descrivbe what we want to do with the state in this machine, and when the event happens to trigger actions the reducers are where the changes to state occur.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global, while component state is kept local and only able to pass state down to children. So If you want the data to be able to pass anywhere in your app then us application state (with redux as state manager). This is good for larger apps, where just using componets can get messy real quick.

1.  What is middleware?

    Just an extenson of the state manager that allows us to intercept actions before they get to the reducers and we can manipulate them. Fro example, we can stop the action, change the action completely, delay the action, etc.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    It allows access to the dispatch() method which allows us to make actions based on the arrival of the data in action-creators.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    connect() and mapStateToProps
