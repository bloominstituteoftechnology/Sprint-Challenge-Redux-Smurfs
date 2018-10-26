1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Map, Filter, Reduce can all be use to manipulate arrays of object without producing side seffects. Object.assign() can be used to create a new object while extending the properties of another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Action are payloads of information that sned data from application to the store. they are the only source of information for store.
    Reducers spefify how the applications state hanges in response to actions sent to the store. Action describe what happened but don't desribe how the applications state changes.
    Store have following responsibilites: hold applications state, allow access to state, allow state to be updated. there are only a single store in redux applications. when there is a need to split data handing logic, reducer composition is used instead of multiple stores.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Component state: component can be connected with the redux store. Components that are not connected to the redux store can still hold state by calling some API.

4.  What is middleware?
    Redux middleware provides a third-party extension point between dispacting an action, and the moment it reaches the reduce. the middleware can be used for logging, reporting, asynchrous, and routing.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    By default action in redux are dispatched synchrously, which is a problem when an app needs to communicate with an external API. Redux allows for middleware that sits between an action being dispacthed and the action reaching the reduces. A thunk is a concept in programmming where a function is used to delay the evalution of an operation.

6.  Which `react-redux` method links up our `components` with our `redux store`?
    connect can be used to map the store state and dispatch to the props of a component.