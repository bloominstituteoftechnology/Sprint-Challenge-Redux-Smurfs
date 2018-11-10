1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

	3 methods that do not produce "side-effects" are map,from, and filter

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

	Reducers work out how the state will change depending on actions, Actions are loads of data that send information to the store, Store has the state data

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

	Component state is only usable by parent and children while Store can hold "Application state" which is accessible to the entire app.

1.  What is middleware?

	code meant to do something injected into the redux flow of things

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

	thunk will return a function instead of an object?

1.  Which `react-redux` method links up our `components` with our `redux store`?

	connect
