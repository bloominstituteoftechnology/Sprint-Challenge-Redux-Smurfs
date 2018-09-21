1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    .filter, .map, .reduce, .find

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    An action is a simple object consisting of a type descriptor and (usually) a payload of some kind, depending on the middleware. Reducers take in actions, and produce a new version of the state, taking care not to mutate the previous version in the process. The store is an object that hold state for you app in a centralized location, allowing you to directly access it from nigh any component in your app.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state, as produced by things like Redux, keeps your applications state in one centralized location, while component state is state stored at a component level. Application state would be a good candidate for when your data is needed across a wide swath of your application, while component state would be good for things like temporarily holding the input of forms before being pushed to the application state.

1.  What is middleware?
    Middleware acts as a addon to Redux that allows you to Do Things(tm) with actions before thee actions (potentially) move on to the reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    "If you don't know what redux-thunk is for, then it's probably not for you." But seriously, it allows us to use asyncronous actions within Redux. 

1.  Which `react-redux` method links up our `components` with our `redux store`?
    { connect }
