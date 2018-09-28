1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

A. map(), reduce() and filter() return new array and do not mutatate the sate of arrays passed-in and therefore they do not produce side-effects. Object.assign() and the spread operator produce new objects while coping the the original object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A. Store is a single JS object where all the state and data are held for the entire React app. When user-interface or an API is received by the view an action object is dispatched which has the data type and the data that is to be manipulated by reducers.
Reducers change the state in response to action object received.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

A.
4.  What is middleware?

A. Middleware such as thunk and logger extend the functionality of Redux.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A. Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

e.g Asynch Dispatch

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
}


6.  Which `react-redux` method links up our `components` with our `redux store`?

A. connect() method from the react-redux module connects React componenets with the redux store where the application state is stored.
