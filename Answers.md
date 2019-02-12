1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    -   1.foreach()
        2. this
        3. .length
    -Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    -store: a global state container
    -reducers: controls the change of our state(s)
    -actions: info that send data between your component(s) & store.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    -one is global, the other is specific to that component. global state is useful for larger applications.

1.  What is middleware?
    -provides a way to interact with actions that have been dispatched to the store before they reach it.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    -something that allows us to make dynamic actions. (allows like a complex if/else statement in our actions)

1.  Which `react-redux` method links up our `components` with our `redux store`?
    -connect()()
