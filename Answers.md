1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a     new object while extending the properties of another object?
    Array.filter Array.map and Array.reduce produce no side effects they return a new array based on the callback passed if it accepts a callback. Higher order components create new objects while extending the properties of the component it takes in.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Reducers set our intial state and handle our switch statements that will affect our state when an action is called. The store is how we pass our reducer to the higher order fucntion Provider that wraps our app. Actions are what triggers the switch in our reducer by passing an action type and can pass data like from an async call with thunk using payload.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is global and the component state is local. Application state is the redux store which can be accesed anywhere and component state lives in the state in the class constructor.

4.  What is middleware?
    Middleware is a higher order component that adds fucntionality to redux such as logger to log the events, and thunk to handle async calls.
5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux thunk allows us to work with asynchronous functions. It dispatches a placeholder function while working on the async call. So Redux doesn't throw an error.

6. Which `react-redux` method links up our `components` with our `redux store`?
    The connect method links up our redux store.
