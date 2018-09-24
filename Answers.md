1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    object.assign(), array.map, array.forEach; we can use assign() to to extend the properties of another object or use the spread operator
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions give out the payload for when something happens
    reducers takes in an action and processes it to accordingly change the state
    store holds the state throughout the project so that multiple files can affect the same state easier
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    an application state is the state that tends the be the central state where as a component state is a state that doesn't represent the entire project
    a component state is good to use when you just need to hold some information that's not important to the app as a whole
1.  What is middleware?
    middleware is an add-on that helps with utilizing the store by giving useful methods
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux thunk mainly gives us the dispatch method, which ends up causing us to use that dispatch method to give the different actions
1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect()