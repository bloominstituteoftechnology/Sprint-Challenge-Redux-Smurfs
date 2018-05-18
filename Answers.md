1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    `Array.concat()`, `Array.filter()`, `Array.map()` do not alter the original arrays but instead create new ones. We can also use `Object.assign()` to create a new object with additional properties.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    - `actions` are packets of data that describe what just happened in our application
    - `reducers` take the descriptions that `actions` provide and use them to update the `store`
    - The `store` is the "global" state tree for our application. There can only be one per application, it holds all state related to our application and it can only be updated by a `reducer` when an `action` is dispatched.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is "global". Any component can connect to it to retrieve and update data. Component states are confined to a single parent component and can only be trickled down to it's children. If you need to pass data from a child up to a parent or between two components that are not nested, use the Application state. If the same data drives many components, that can also be a use case for storing state on the Application. Non-critical or UI driven states can be stored on a local component.

1.  What is middleware?

    Middleware is a way to extend Redux's functionality by patching into the Redux flow and intercepting every `action` before it is dispatched to the `reducer`. Once it has the `action` it can stop it, send it on it's way to the `reducer`, dispatch a different `action` or dispatch multiple `actions`.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    `redux-thunk` allows us to handle asynchronous functions in our `action-creators`. Instead of returning an object with the type and payload, with `redux-thunk` we return a function and pass it the `dispatch`. Within our returned function we can then dispatch multiple `actions` including some tied to a promise.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    `connect`
