1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

array.concat(), Object.assign(), array.map()
Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions sends a message { action: type } to the reducer that tells it when and how to update the store which holds the application state.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?

application state is inside the store that wraps the whole app.
component state only care about the state/ information on that particular component.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux thunk is a middleware that lets us send/dispatch a function as a promise instead of a plain object.

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect()