1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Map, filter, concat. I used the spread operator {...state, changed: changedValue}, but Object.assign({},state, {changed: changedValue}) works as well.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are actions that our application can have to change the state of the application. The actions are interpreted by reducers, which in turn change the state of the application. This is done by the reducer interfacing with the store of the application, which ultimately determines the state.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is universally within the state, it can be used at a higher level, or a lower level. It deals with the difficulty of passing information from a lower component to a higher component in React. Component state is good when you don't need to pass information to a higher layer, and the state information is only necessary within non complex childrens. For example, it would be good to use component state when utilizing state for controlled components within inputs.

1.  What is middleware?

Middleware is a function that allows for actions to be intercepted before reaching the reducer. It can control whether an action hits a reducer, based on different requirements.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that allows us to call async dispatch functions. This can be done within our action creators, and we can dispatch multiple actions from one action-creator.

1.  Which `react-redux` method links up our `components` with our `redux store`?

First, we createStore with our reducers, which allows the store to be connected with our reducers. We can then connect the components with the connect method, which takes in mapStateToProps, mapDispatchToProps, and the component.
