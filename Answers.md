1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Array.map(), Array.filter(), Array.concat()
    wen can use  Object.assign() to create a new Object while extending the properties of another Object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Action in Redux are plain javascript object ot functions that return javacripts object .
    An action is like a message that we send (i.e. dispatch) to our central Redux store.

    Reducer is called a reducer is because you could "reduce" a collection of actions and an initial state (of the store) on which to perform these actions to get the resulting final state .The reducer is a pure function that takes the current state and an action, and returns the next state

    A store in redux is the central place where the state of the application reside .
    The Store is the object that brings them together. The store has the following
    Holds application state;
    Allows access to state via getState();
    Allows state to be updated via dispatch(action);

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application State is the general state of the application that is shared between parents components and child component . but a component state is a state that only affect this particular component and doesn't affect the general state of the application.

1.  What is middleware?
     Middleware provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer. Examples of different uses for middleware include logging actions, reporting errors, making asynchronous requests, and dispatching new actions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. ... If you're curious, a thunk is a concept in programming where a function is used to delay the evaluation/calculation of an operation

1.  Which `react-redux` method links up our `components` with our `redux store`?
     .connect()
