1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Three methods that do not produce side effects by creating a new array/object are map(), filter() and reduce(). We can create new objects with Object.assign() or use the spread operator {...}.

1. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions, as their name suggests are triggered by user interaction with our app, i.e. the user clicking a button. Actions have a type and a payload. In response to user interaction specific to their type they send data (the payload) to reducers to update the store. Reducers decide how the store will be updated in response to actions by returning a new clone of state. Redux is thought of to have a "single source of truth" because unlike the default React state, the store is completely immutable.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the contents of the store. Application state should be used for data that is needed in multiple components throughout your application. Component state is the local state within a constructor function of a container component. Component state would be best used for data that is only needed within the scope of a single component, like form values. 

1. What is middleware?

Middleware acts as a bridge between actions and reducers that allows us to interact with actions in ways we otherwise wouldn't be able to do.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that allows us to perform asynchronous actions in Redux. Actions creators can instead return a function, that doesn't need to be dispatched right away, instead of an object.

1. Which `react-redux` method links up our `components` with our `redux store`?

Connect.
