1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

3 JavaScript Array methods are .map, .concat, and .filter. Concat creates a new object without manipulating the original data.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

We use 'actions' to describe what changes we want to happen when a user is interacting with our app. 'Reducers' take in the actions we have created and update our app state accordingly--not by mutating the original state, but by returning a new object. The 'store' is a js Object that holds the state of our app, and is known as a 'single source of truth' because the data it contains is our state tree that remains unchanged; it should not be mutated with our actions or reducers.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is dealt with through Redux, and Component state is dealt with through React (for the most part). If you do not need to share or mount state with other components, then you can just us Component state (and vice-versa).

1.  What is middleware?

Middleware is a middle party that allows us to deal properly with asynchronous functions. It listens for dispatches between actions and reducers to execute the exact code we write depending on what else is happening.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

'Redux-thunk' is a middleware that allows us to dispatch multiple actions from a single 'action-creator.'

1.  Which `react-redux` method links up our `components` with our `redux store`?

The {connect} method links our components with our store.