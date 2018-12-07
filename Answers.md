1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    ``.map(), .filter(), .reduce(). We use .map() to create a new object while extending properties of another object.``
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   `` The store holds all of our state for our application. The state is never mutated directly. We only copy from the store, modify the clone, and replace the original state with the copy. Reducers make the copy of the state, modify the copy, and return it to the store. Actions are pure functions and are how the reducers get triggered. ``
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    ``Application state is global and can be accessed throughout the application (like through the store in Redux). Component state is local to that component and can only be passed to children via props. Normally its best to keep the state in the store, but for things like forms, you could have your state in that component.``
1.  What is middleware?
    ``Middleware is an extension for Redux that handles async requests. There are many third party middleware.``
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    ``Redux thunk gives us the ability to have our action creators return functions that have access to the dispatch() method. We can then have multiple actions from a single creator because the calls will be done async.``
1.  Which `react-redux` method links up our `components` with our `redux store`?
    ``connect()``