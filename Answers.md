1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    1) Object.assign, this is also used to create a new object using another object's properties, but with some      modifications.

    2) Array.filter

    3) Array.map

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    In redux, data is centralized into a single location and components can be given access to read the data instead of individual components keeping track of the data and it's modifications themselves, potentially causing an issue where one component differs from another.

    To actually change the data in the store, components can trigger actions, which are pre-determined methods of changes. Action creators send an object to a reducer, telling it what type of modification to make, and a payload of data to be used.

    The reducer will take the action, and depending on the type, will form a new state object using the current state, the data to be changed, and replace the store with the new version of the store object.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is the data that is stored such that the entirety of the application can be used by it. Component state is data that is very specific to just the components that need it. Application state can be data such as a currently logged in user, whereas input data is a form is only really needed by the form component which holds it in component state.

1.  What is middleware?

    Middleware intercepts something being sent to execute extra functionality. Such as checking whether a request for data is authorized to be completed, or to log what is being sent.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk allows for asynchronous changes to a redux store. It's checks actions being sent to the reducer and determines if it's a normal action, which will go through, or a function that returns a promise, which it'll use to dispatch multiple actions as the promise is resolved.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    connect
