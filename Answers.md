1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    slice, map, filter. spread operator


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    actions are a way to send data to your application, reducers decide how the application changes state based on data, the store is what lumps everything together so you can reference it. once the store is created it is the only thing that needs to be referenced since it is a one stop shop for your state in your application.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is all the state created by your reducers, component state is what is passed down to your component from the app state, and all new state you create on the component level.



1.  What is middleware?

    middleware lumps different systems together so that its outputs can be used in different environments.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    thunk allows us to return a function instead of an object. it allows us to fetch data and apply that data to our action.


1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect
