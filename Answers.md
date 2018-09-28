1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Map, filter and reduce can all be used to manipulate arrays of object without producing side effects. Object.assign() can be used to create a new object while extending the properties of another object.

1)  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are paylods of information that send data from your application to your store. They are only source of information for store.

Reducers specify how the applications state hanges in response to actions sent to the store. Actions describe what happened but dont describe how the applications state changes.

In redux the store has the following responsibilities: hold application state, allow access to state, allow state to be updated. There is only a single store in Redux applications. When there is a need to split data handling logic, reducer compoisition is used instead of multiple stores.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Component state: components can be connected with the redux store. Componenets that are not connected to the redux store can sill hold state by calling some API.

1)  What is middleware?
    Redux middleware provides a third-party extension point between dispacthing an action, and the moment it reaches the reducer. This middleware can be used for logging, crash reporting, talking to an asynchronous API, routing and more.

1)  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    By default actions in Redux are dispatched synchronously, which is a problem when an app needs to communicate with an external API or perfirn sude effects. Redux allows for middleware that sits between an action being dispacthed and the action reaching the reducers.

A thunk is a concept in programming where a function is used to delay the evaluation/calculation of an operation.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect can be used to map the stores state and dispatch to the props of a component.
