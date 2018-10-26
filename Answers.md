1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    .map, .filer, .concat; Object.assign

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    `actions`: actions are objects or functions that return objects that have an action type and payload of associated data. 

    `reducers`: reducers are pure functions that return new objects to update state in response to actions they receive.

    `store`: the store is an object that holds the application's state tree. It is considered a single source of truth because it cannot be branched into conflicting versions; it is consistent, regardless of which component is viewing the state tree.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state: state that is controlled by the store; best to use for state that multiple components will be reading and acting on.
    Component state: state that is contained within a component; best to use when some state information is only relevant to one component (eg. form inputs & change handler).

4.  What is middleware?
    Middleware is an intermediary, or series of intermediaries, that modifies actions between action creators and reducers. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    `redux-thunk` is a middleware that enables asynchronous actions to occur before their passage to the synchronous reducers. It privileges our `action-creators` with direct access to the dispatch method and the ability to return functions, instead of action objects.

6.  Which `react-redux` method links up our `components` with our `redux store`?
connect?
    connect