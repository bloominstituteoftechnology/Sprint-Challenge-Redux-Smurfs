## Questions

1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
1. What is middleware?
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1. Which `react-redux` method links up our `components` with our `redux store`?

## Answers

1. `Object.assign({}, oldObject)`, `oldArray.slice(0)`, and `[ ...oldArray ]` / `{ ...oldObject }`. We would use `{ ...oldObject, oldObjectKey: newObjectVal }` to create a new object while extending the properties of another object.
1. The `actions` dispatch an action (can use `dispatch` or just `export`) to the `reducers` to change the `state` of Redux which is stored in the `store`. An `action` is received from a user interaction or the App, and put through the `reducer` to change the `state` and _update_ the App in some way. The `store` is known as the 'single source of truth' because there is only one `store` on any given Redux **App**lication.
1. The difference between Application state and Component state is that Application state is the `state` in the `store` from Redux. Component state is the `state` in any given `React extends Component` in the whole Redux **App**lication. Application state is useful when a piece of information needs to be `synchronous`, or updated to all `Component`s at the same time (or `Component`s need to have the most up-to-date copy of something). Component state is then useful when only the `Component` or its `child`ren need some piece of information retained (while it's mounted of course).
1. Middleware is used in Redux applications to apply _things_ to the Redux `state`. For example, `redux-thunk` helps Redux implement asynchronous actions like http requests (e.g. via `axios`) in the Redux `state`. Other middleware can `console.log` Redux states and actions such as `redux-logger`.
1. `redux-thunk` allows us to implement **a**synchronicity in a Redux application. The `action-creators` can be **a**synchronous by sending `actions` right after actions that are traditionally **a**synchronous (like http requests) to keep Redux **synchronous**. In the example of http requests, `redux-thunk` allows us to only send a successful or unsuccessful http request after a request is actually received via `dispatch`.
1. The `connect` method from `react-redux` links up our `components` with our Redux `store`.
