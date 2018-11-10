1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    `Array.concat()`, `Array.map()` and `Array.filter()`. They return new arrays and don't mutate the original.`Object.assign()` is used to create a new object while extending the properties of another.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    _Redux_ is a single source of truth where data is stored. This simplifies where data originates. When there are many different components with different states it can be very confusing, but with Redux there is just one state. It makes it much simpler to see how the data flows and helps reduce side effects.

    _Actions_ are objects that are created by action creators and are the only way to manipulate the Redux store. They have a `type` to tell the reducer which action to take and a `payload` (usually) that contains data to be passed through.

    _Reducers_ take the actions that are received and make any changes that are specified and return an object which is then passed to the store to be updated.

    The _store_ is where all the data is held. Components connect to the store to access data and render it out to their child components.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state, like Redux, has a global data store that all components can access. Components can gain access by using `connect` (for Redux) to access state and actions.

    In Component state, a components usually only has data for itself and its child components. In Redux, component state is also used to temporarily hold information such as form input.

    It would be good to use application state when the app needs to scale. While initially more complex to set up, Application state provides a much easier way to access data and maintain flow through the app.

4.  What is middleware?
    Middleware allows you to intercept every action before it flows to the reducers. This means that you can stop actions from taking place, forward actions without making any changes, dispatch a different action, or dispatch multiple actions.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    `redux-thunk` allows the developer to perform asynchronous operations (like API calls) while using Redux. It's a middleware so it intercepts the actions before they flow to the reducer stack. With `redux-thunk` we now return a function from our `action-creators`. The function will be called by `redux-thunk` passing it the _dispatch_ method from the store.

6.  Which `react-redux` method links up our `components` with our `redux store`?
    `connect`
