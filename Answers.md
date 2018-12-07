1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Array.filter(), Array.map(), and Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Reducers handle state management according to dispatched actions  and the store stores the redux-managed state, ready to be passed down to components as props.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global state, which is held in 'stores' by Redux and handled by a container component. Local state is useful when the state is necessary to that prop and interacts with no other components, like for a change handler in a form input.

1.  What is middleware?
It handles and dispatches actions to the reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk allows us to use action-creators as functions, rather than just as action/string dispatchers.

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect()