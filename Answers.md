1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    -1 : Map method
    -2 : Spread Operator
    -3 : Reduce, filter, etc

    We would use the spread operator to make a new object while extending the properties of another


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

ACTIONS : actions are dispatched through a function and always carry a "type" that will tell what reducer to run
and sometimes a payload.

REDUCERS : Reducers define initial state and have switch statements that take in actions

STORE : Store is where all data/state is stored and can be shared with individual components.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?



1.  What is middleware?

Middleware is code that is run inbetween redux that can change actions or run some convienient code for you.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It allows us to dispatch an action that returns a function.


1.  Which `react-redux` method links up our `components` with our `redux store`?
Connect and mapStateToProps
