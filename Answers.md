1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
 
 Three  array/object methods that don't produce side-effects are map, filter and assign. We use Object.assign() to create a new object while extending the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are a JS object that send data from app to the store.
Reducers are considered pure functions, they take in the current state and an action and return a newly updated state.
The store is where  we keep the app's state.  Because it's only stored there  we use actions and reducers to retrieve and update the data.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state in the store. It's available to multiple components and made available to them via actions and reducers. Component state is specific to a class component.  only accessible to that class or it's child component where props have been passed.

In redux, we'll generally use Application state for handling the app's data; but component state for handling component's methods, like setting the input of a form to the component's local state, to send that data back to the application's state and update it universally.

1.  What is middleware?

Middleware exists between applications and components. It allows them to communicate with one another. In redux all actions flow through middleware before moving on to reducers. This makes it to where only the data and actions needed are sent to reducers as the users use the app.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It is a middleware for redux that gives our actions access to dispatch(), giving us asynchronous functions. These functions can be called with the action creator.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect().