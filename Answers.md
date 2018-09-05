1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Three array/object methids are:
    -Map 
    -Reduce
    -Filter

    The method that we use to create a new object extending properties of another is Object.assign().

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    -`actions` - are objects that has two properties (`type` and `payload` ) `type` is required and you can add as many properties as you want. Actions structure.

    -`reducers` - returns a new copy of the orginal state. Reducers are cannot be used with mutatuing methods.

    -`store` - the store brings all things together (`actions` and `reducers`). `store` gives us the ability to use methods such as dispatch(). the store can combine the reducers and control the dipatch actions when called. 

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    
    Application state - the state is global and conponents can be accessed anywhere when using libaraies such as Redux, as long as they are connected to the store.

    Component state - the state is local and only be updated when passed down from props

4.  What is middleware?

    Middleware- manages requests based on application responses 


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    -`redux-thunk` is a middleware that allows you to write `action-creators` that returns a function instead of an action. `thunk` allows us to delay our actions or to only dispatch when certain conditions are met.

6.  Which `react-redux` method links up our `components` with our `redux store`?

    connect().
