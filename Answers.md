1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    .filter, .map, and .reduce.

    Object.assign({}, someObject, {newKey: newValue})



1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    -The store holds the applications state, getState() allows access to the state, dispatch(action) updates the state.

    -the actions are information from the application being sent to the store by way of payload and type.

    -the reducers specify what happened to the state in response to the actions sent to the store.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    -Application state is {global}. Redux uses stores to hold the application state.

    -Component state is {local} state and lives within that single component but can be passed down through props.

    -A good time to use one over the other is dependent on how big your application is going to be. A bigger application would better utilize Application state because of the ease of access to the store by any component as long as they are connected to it.

1.  What is middleware?
    -It is like a checkpoint between the action --(to the)--> reducer. We can add a logger to see changes to state in the app, as well as error or crash reports and adding multiple/different actions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    -It provides the ability to handle asynchronous operations inside our action creators. Dispatching multiple actions from a single action creator.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    -export default connect(mapStateToProps)(someContainer)
