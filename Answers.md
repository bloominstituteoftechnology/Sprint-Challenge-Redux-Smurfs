1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    map, slice(), spread. We can also use spread to copy an object and add new properties onto it.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions let us assign information, and send that info to our reducers.

Reducers take in the actions, and let us use a switch statement to check the type of the action passed in, then based on that action we do something with the action passed in.

The store holds all of the state of our application, which we can connect any component to.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global state that can be accessed by any component in your app. Component state is state only avaliable to that component, meaning other components don't know that state exists, and can not access it.

We would use application state if we needed multiple different components to be connected to the same state, like a nav bar and a footer.
Component state could be used when only one component needs the state, like a user form input.

1.  What is middleware?

Middleware goes in between our request and response. It provides an extension point between are actions and reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk allows us to make async http requests in redux. Our action creators return functions instead of an action, and can dispatch only if a certain condition is met.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    The connect methods lets use connect everything together.
