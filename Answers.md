1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Map, filter and assign. We use Object.assign().


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are Javascript Objects that send data from the app to the store.

Reducers are pure functions that take in the current state and an action, to return a newly updated state.

The Store is where the app's state is located, like the heart of redux. It's the only place that state exists so every component must use actions and reducers to retrieve and update the state.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is referencing the Store's state, that is accessible to multiple components within the app through reducers and actions. Component state is the state specific to a class component, and not accessible anywhere except to child components it may pass props to.

In redux, we'll generally use Application state for handling the app's data; but component state for handling component's methods, like setting the input of a form to the component's local state, to send that data back to the application's state and update it universally.


1.  What is middleware?

Middleware is an extension that exists between applications and components, to allow them to interact and communicate. In Redux specifically, all actions and data flows through middleware before dispatching to reducers, which allows us to only send the data and actions needed to the reducers as the user engages with the app, rather than everything each time.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It's a specific middleware for Redux that gives our actions access to dispatch() to dispatch specifically the actions needed in each action creator. This also allows us to work with asynchronous functions being called with the action creator. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect()

