1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array methods, .map .filter , and .concat do not produce side effects.  Object.assign.



1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Reducers specify how the application's state changes in response to actions sent to the store.
Actions are payloads of information that send data from your application to your store
A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

the store is our state tree, that is not rewritten or changed aka the single source of truth.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Your application state is global, and your component state is local. A larger app with a lot of components that need info passed down could benefit from an application state while a smaller less complicated app and pass info through the components with the component state.

1.  What is middleware?

Middleware is a powerful extension point for Redux.  it can be used for things like asynchronous API calls.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

. It provides the ability to have our action creators return functions that have direct access to the dispatch() method of the Redux Store.


1.  Which `react-redux` method links up our `components` with our `redux store`?

connect
