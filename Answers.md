1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- map, filter, concat

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- `actions` functions that return an object (type of action, payload if necessary). These actions get dispatched to our reducers when a user directly or indirectly interacts with the app.
- `reducers` functions that return a piece of our app state. Based on the type of action they receive, reducers will change the state or return the current state.
- `store` Our app's state formed by all the reducers combined.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

- App state is the state formed by reducers, it's our global state. Ex: if a user is logged in/out.
- Component state is the state only that component cares about. Ex: handling an input field.

1.  What is middleware?

- Middleware is the gatekeeper of actions. Middleware decides if an action will dispatch to our reducers or not. It can also change an action based on a condition.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Instead of returning an object (synchronous), our action creators will return a function (asynchronous)

1.  Which `react-redux` method links up our `components` with our `redux store`?

- connect()
