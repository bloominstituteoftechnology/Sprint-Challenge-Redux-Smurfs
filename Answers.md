1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.reduce, .map, .filter do not produce side-effects. Object.assign is used to create a new object while extending the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store contains all of our application’s state, which is why it is considered the ‘single source of truth’. Actions are dispatched to tell us something has changed in the application. Reducers take in an action and determine how to update the state based on the action type. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state from the redux store and handles all of the application’s state, while component state lives inside of the component and only handles the state for that component. A good time to use component state is if the state of that component does not need to be shared by any other component. If the state needs to be accessed by multiple components, use application (redux store) state.

1.  What is middleware?

Middleware allows us to add new functionality to Redux by intercepting actions before they arrive at the Reducers. It can then stop, forward or dispatch this action, a different action, or even multiple actions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a type of middleware that allows us to asynchronously handle operations in action creators. It changes our action creators by allowing them to have access to the dispatch method through function they return.

1.  Which `react-redux` method links up our `components` with our `redux store`?

Connect