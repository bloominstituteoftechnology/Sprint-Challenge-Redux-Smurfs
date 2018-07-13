1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    A: .map, .concat .filter, .assign
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    A: Actions are objects desribing what happened in live time.
        Reducers are pure functions that take the current state and the action and return a new state.
        Store puts our state in a ccentral place accessible from the entire app.
        That means that our store holds multiple states but only one is active or true at once. We dont ever directly change our state, we use reducers.
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    A: Application state is available to the entire app, component state is where the state is stored only on on the component unless passed through props.
4.  What is middleware?
    A: It creates access to an API after the action but before the reducer is ran.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    A: It allows us to return functions and actions in our action creators.
6.  Which `react-redux` method links up our `components` with our `redux store`?
    A: connect
