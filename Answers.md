1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    map, filter and reduce.
    We use object.assign to create a new object and extend the properties of another.

1)  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are what the reducer uses to decipher what task to complete by comparing the old state with the new state.
    The reducer compares the old state to the new state, and updates the state depending on what information is passed to it from the action.
    The central store is where all of the application state is held.
1)  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application monitors the entire state of an application.
    Component state is only for that single component and its children.
    Component state would be better for small applications, where Application state is better with larger applications.
1)  What is middleware?
    A mediator between the application and the server.
1)  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux thunk allows asynchronous calls to the server. It allows logic to be used flexibly when passing information to and from the server.
1)  Which `react-redux` method links up our `components` with our `redux store`?
    { connect }, which allows us to wrap our app in the Provider component and pass our store as a prop.
