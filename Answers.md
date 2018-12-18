1.   Which method do we use to create a new object while extending the properties of another object?
    filter, map, and reduce methods

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is        the store known as a 'single source of truth' in a redux application?
    Store: is the part of a redux app that contains all the stored state.
    Reducers: Reducers are a global representation of state in the application and can be passed/used anywhere. I believe they are used to ultimately change state.
    Actions: Actions are a way to create global methods throughout the application, mounting components, delete, add, etc


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application State: globally stored and and be passed throughout the application, one source of truth. Great for larger apps, good way to keep track of state, and pass methods and props as needed.
    Component State: specific to the component/parent component it is written in. Good for onChange events and data that won't ultimately be stored globally in the app.


4.  What is middleware?
    Is a higher order function that makes a dispatch function usually into an async action such as a promise or thunk.


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux-thunk is a middleware that returns a function instead of an object.

6.  Which `react-redux` method links up our `components` with our `redux store`?
    Connect (mapStateToProps,mapDispatchToProps)(react-component);